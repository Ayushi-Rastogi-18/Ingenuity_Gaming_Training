import { Application, Container, Resource, Sprite, Texture, Text } from "pixi.js";
import { Snake } from "./snake";
import { Food } from "./food";
import { preloader } from "./preloader";
import list from './assets';
import { selectTexture } from "./texture";
import "../assets/audio/down.mp3";
import "../assets/audio/up.mp3";
import "../assets/audio/left.mp3";
import "../assets/audio/right.mp3";


export class Game {
    app: Application;
    stage: Container;
    bg: Sprite | undefined;
    sound: Sprite | undefined;
    food: Sprite | undefined;
    snacky: Sprite | undefined;
    gameover: Sprite | undefined;
    wingame: Sprite | undefined;
    index: number;
    box: number = 32;
    snake: Container | undefined;
    num: number| undefined;
    snakeObj: any;
    foodi: any;
    vert: number | undefined;
    hori: number | undefined;
    direction: string | undefined;
    points: undefined | Text;
    foodcount: undefined | Text;
    up: HTMLAudioElement;
    down: HTMLAudioElement;
    right: HTMLAudioElement;
    left: HTMLAudioElement;
    win: HTMLAudioElement;
    
    // motion:number;
    constructor(app: Application) {
        this.index = 1;
        this.app = app;
        this.stage = app.stage;
        this.snakeObj = new Snake(this.app);
        this.foodi = new Food(this.app);
        this.up = new Audio();
        this.up.src = "../assets/audio/up.mp3";
        this.down = new Audio();
        this.down.src = "../assets/audio/down.mp3";
        this.left = new Audio();
        this.left.src = "../assets/audio/left.mp3";
        this.right = new Audio();
        this.right.src = "../assets/audio/right.mp3";
        this.win = new Audio();
        this.win.src = "../assets/audio/win.wav";
        preloader(list, () => {
            this.bg = this.createSprite(selectTexture('bg') as Texture<Resource>, 0,0,1);
            this.snacky = this.createSprite(selectTexture('snacky') as Texture<Resource>, app.view.width/2 - 20, 17, 0.1);
            this.food = this.createSprite(selectTexture('food') as Texture<Resource>,this.foodi.a, this.foodi.b, 1);
            this.sound = this.createSprite(selectTexture('soundon') as Texture<Resource>, 40, 570, 1);
            this.snake = this.snakeObj.createSnake(this.box);
            this.points = this.createText("Score 0" , 420 , 17);
            this.foodcount = this.createText("  0", 50 , 17);
            this.sound.interactive = true;
            this.sound.on("click", () => {
                if(this.snakeObj.dead.muted && this.up.muted && this.down.muted && this.left.muted && this.right.muted && this.snakeObj.eat.muted){
                    this.snakeObj.dead.muted = false;
                    this.up.muted = false;
                    this.down.muted = false;
                    this.left.muted = false;
                    this.right.muted = false;
                    this.snakeObj.eat.muted = false;
                    (this.sound as Sprite).texture = selectTexture('soundon') as Texture<Resource>;
                }
                else{
                    this.snakeObj.dead.muted = true;
                    this.up.muted = true;
                    this.down.muted = true;
                    this.left.muted = true;
                    this.right.muted = true;
                    this.snakeObj.eat.muted = true;
                    (this.sound as Sprite).texture = selectTexture('soundoff') as Texture<Resource>;
                }
            });
        }); 
    }
    
    //background image
    createSprite(texture: Texture<Resource>, x: number, y: number, sc: number): Sprite {
        let img = Sprite.from(texture);
        img.position.set(x, y);
        img.scale.set(sc);
        return this.stage.addChild(img);
    }
    createText(entry: string, x: number, y: number): Text {
        let text: Text = new Text(entry,{
            fontSize: "40px",
            fontFamily: "Arial",
            fill: "white"
        });
        text.position.set(x, y);
        return this.stage.addChild(text);
    }
    events(e: KeyboardEvent) {
        console.log(e);
      
        console.log(this.vert, this.hori);
        if (this.vert && (e.code == "ArrowLeft" || e.code == "ArrowRight")) {
            clearInterval(this.vert);
            this.vert = undefined;
        }
        if (this.hori && (e.code == "ArrowUp" || e.code == "ArrowDown")) {
            clearInterval(this.hori);
            this.hori = undefined;
        }
        if (this.hori == undefined) {
            if (e.code == 'ArrowLeft') {
                this.left.play();
                this.direction = 'left';
                this.snakeObj.addLength(-32, 0);
                this.hori = Number(setInterval(() => this.snakeObj.move(), 200));
            }
            if (e.code == 'ArrowRight') {
                this.right.play();
                this.direction = 'right';
                this.snakeObj.addLength(32, 0);
                this.hori = Number(setInterval(() => this.snakeObj.move(), 200));
            }
        }
        if (this.vert == undefined) {
            if (e.code == 'ArrowDown') {
                this.down.play();
                this.direction = 'down';
                this.snakeObj.addLength(0, 32);
                this.vert = Number(setInterval(() => this.snakeObj.move(), 200));
            }
            if (e.code == 'ArrowUp') {
                this.up.play();
                this.direction = 'up';
                this.snakeObj.addLength(0, -32);
                this.vert = Number(setInterval(() => this.snakeObj.move(), 200));
            }
        }

    }

    endGame(){
        if(this.snakeObj.gameOver() == true){
            this.app.ticker.stop();
            (this.food as Sprite).visible = false;
            (this.snake as Sprite).visible = false;
            this.gameover = this.createSprite(selectTexture('gameover') as Texture<Resource>, 45, 150, 1);
        }
    }
    finish(){
        if(this.snakeObj.gameWin() == true){
            this.app.ticker.stop();
            (this.food as Sprite).visible = false;
            (this.snake as Sprite).visible = false;
            this.wingame = this.createSprite(selectTexture('won') as Texture<Resource>, 50, 50, 1);
            this.win.play();
        }
    }
    animate() {
        if(this.points && this.foodcount){
            this.points.text = "Score "+ this.snakeObj.score;
            this.foodcount.text = "  "+ this.snakeObj.count;
        }
        if(this.snake){
            this.snake.destroy();
            this.snake = this.snakeObj.createSnake(this.box);
        }
        if(this.food){
            this.food.destroy();
            this.food = this.createSprite(selectTexture('food') as Texture<Resource>, this.foodi.a,this.foodi.b, 1); 
        }
       this.endGame();
       this.finish();
        if(this.food){
         const test= this.snakeObj.snakeFood(this.foodi.a,this.foodi.b,this.snakeObj.snake[0].x,this.snakeObj.snake[0].y);
          if(test==true){
              this.foodi.foodPosition();
          }
        
        }
    }
}