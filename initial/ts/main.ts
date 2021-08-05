import { Application } from "pixi.js";
import { Game } from "./task";
import "../css/style.css";

const canvas:HTMLCanvasElement=document.getElementById("canvas")as HTMLCanvasElement;
const app= new Application({
    view:canvas,
    width:608,
    height:608,
    backgroundColor:0xeeffee,
    sharedTicker:true,
    sharedLoader:true
});

const task=new Game(app);
app.ticker.add(task.animate.bind(task));
window.addEventListener('keydown',task.events.bind(task));
document.body.style.background = "url(../assets/images/snakebg.jpg) no-repeat center center/cover";