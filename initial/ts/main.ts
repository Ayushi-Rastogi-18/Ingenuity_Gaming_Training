import '../css/style.css';
import { Application, Ticker } from 'pixi.js';

import { Game } from './game';

window.onload = () => {
  const app = new Application({
    width: 800,
    height: window.innerHeight*0.98,
    backgroundColor: 0X000000,//0xeeeeee
    sharedTicker: true,
    sharedLoader: true,
  });
  document.body.style.background = "url(../assets/images/bg.jpg) no-repeat center center/cover";
  document.body.appendChild(app.view);
  console.log("main.ts working");

  const game = new Game(app);
  const ticker = Ticker.shared;
  ticker.add(game.update.bind(game));
  
};
