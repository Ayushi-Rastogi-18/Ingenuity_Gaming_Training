export class game {
    car = new Image();
    road = new Image();
    bg = new Image();
    canvas;
    carW = 48;
    carH = 92;
    x;
    y;
    speed = 3;
    dir = 0;
    mod = 0;
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
        this.x = canvas.width / 3;
        this.y = canvas.height - this.carH;
        this.car.src = "https://th.bing.com/th/id/R.2144a2fae2c7e97c3b6e2ae01d065593?rik=Q0l6D0MdNHufcQ&pid=ImgRaw";
        this.road.src = "https://th.bing.com/th/id/R.3a63900ec9badf280238bee1798b2a4c?rik=54WNLTwy12TnIQ&pid=ImgRaw";
        this.bg.src = "https://envato-shoebox-0.imgix.net/2a4d/3dee-a1b8-4d82-892d-8976d103cb00/DJI_0006.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=8b65ec3dabad4c69dd394455220ce444";
    }
    getCoordinates() {
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
        this.x = canvas.width / 3;
        this.y = canvas.height - this.carH;
    }

}
