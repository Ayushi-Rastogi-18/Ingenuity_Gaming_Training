import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
import {country_list} from "./countries"
import '../resources/css/style.css';
import './countries';

// SELECT ALL ELEMENTS
const country_name_element:HTMLElement = document.querySelector(".country .name")as HTMLElement;
const total_cases_element:HTMLElement = document.querySelector(".total-cases .value")as HTMLElement;
const new_cases_element:HTMLElement = document.querySelector(".total-cases .new-value")as HTMLElement;
const recovered_element:HTMLElement = document.querySelector(".recovered .value")as HTMLElement;
const new_recovered_element:HTMLElement = document.querySelector(".recovered .new-value")as HTMLElement;
const deaths_element:HTMLElement = document.querySelector(".deaths .value")as HTMLElement;
const new_deaths_element:HTMLElement = document.querySelector(".deaths .new-value")as HTMLElement;
const can=document.getElementById("axes_line_chart")as HTMLCanvasElement;

const ctx: CanvasRenderingContext2D = can.getContext("2d");

// APP VARIABLES
let app_data: Array<number> = [],
  cases_list: Array<number> = [],
  recovered_list: Array<number> = [],
  deaths_list: Array<number>= [],
  deaths: Array<number>= [],
  formatedDates: Array<String>= [];
  let dates:Array<string> = [];
  let user_country: string;
  let country_code: string 
// GET USERS COUNTRY CODE
fetch("https://api.ipgeolocation.io/ipgeo?apiKey=14c7928d2aef416287e034ee91cd360d")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
     country_code = data.country_code2;
    country_list.forEach((country) => {
      if (country['code'] == country_code) {
        user_country = country['name'];
      }
    });
    abc(user_country);
  });
export function abc(c):any{
  console.log(c," selected");
  country_name_element.innerHTML = c;
  fetchData(c);
}
/* ---------------------------------------------- */
/*                     FETCH API                  */
/* ---------------------------------------------- */

function fetchData(country:any) {
  let user_country: string = country;
  let dates:Array<string> = [];
  (cases_list = []),
    (recovered_list = []),
    (deaths_list = []),
    (dates = []),
    (formatedDates = []);

  const api_fetch = async (country) => {
    await fetch(
    "https://api.covid19api.com/total/country/" + country + "/status/confirmed",
    {
      "method": "GET",
      "redirect": "follow",
    }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((entry) => {
          dates.push(entry.Date);
          cases_list.push(entry.Cases);
        });
      });

    await fetch(
      "https://api.covid19api.com/total/country/" + country + "/status/recovered",
      {
        "method": "GET",
        "redirect": "follow",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((entry) => {
          recovered_list.push(entry.Cases);
        });
      });

    await fetch(
      "https://api.covid19api.com/total/country/" + country + "/status/deaths",
      {
        "method": "GET",
        "redirect": "follow",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((entry) => {
          deaths_list.push(entry.Cases);
        });
      });
      dates.forEach((date) => {
        formatedDates.push(formatDate(date));
      });
      updateUI();
    };

  api_fetch(country);
}

// UPDATE UI FUNCTION

function updateUI() {
  updateStats();
  setTimeout(()=>axesLinearChart(),2000);
}

function updateStats() {
  let user_country: string;
  const total_cases = cases_list[cases_list.length - 1];
  const new_confirmed_cases = total_cases - cases_list[cases_list.length - 2];

  const total_recovered = recovered_list[recovered_list.length - 1];
  const new_recovered_cases = total_recovered - recovered_list[recovered_list.length - 2];

  const total_deaths = deaths_list[deaths_list.length - 1];
  const new_deaths_cases = total_deaths - deaths_list[deaths_list.length - 2];

  total_cases_element.innerHTML = String(total_cases);
  new_cases_element.innerHTML = `+${new_confirmed_cases}`;
  recovered_element.innerHTML = String(total_recovered);
  new_recovered_element.innerHTML = `+${new_recovered_cases}`;
  deaths_element.innerHTML = String(total_deaths);
  new_deaths_element.innerHTML = `+${new_deaths_cases}`;
}

// UPDATE CHART
let my_chart:any;
function axesLinearChart() {
  if (my_chart) {
    my_chart.destroy();
  }
  my_chart = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Cases",
          data: cases_list,
          fill: false,
          borderColor: "#FFF",
          backgroundColor: "#FFF",
          borderWidth: 1,
        },
        {
          label: "Recovered",
          data: recovered_list,
          fill: false,
          borderColor: "#009688",
          backgroundColor: "#009688",
          borderWidth: 1,
        },
        {
          label: "Deaths",
          data: deaths_list,
          fill: false,
          borderColor: "#f44336",
          backgroundColor: "#f44336",
          borderWidth: 1,
        },
      ],
      labels: formatedDates,
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

// FORMAT DATES
const monthsNames: Array<string> = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(dateString: string) : string{
  let date:Date = new Date(dateString);
  return `${date.getDate()} ${monthsNames[date.getMonth()]}`;
}
