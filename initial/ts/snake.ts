import { Graphics, Application, Container } from "pixi.js";
import "../assets/audio/eat.mp3";
import "../assets/audio/dead.mp3";
export class Snake {
    snake: Array<{ x: number, y: number }> = [];
    stage: Container;
    snakeContainer: Container;
    box: number = 32;
    dx: number = 0;
    dy: number = 0;
    score: number = 0;
    count: number = 0;
    dead: HTMLAudioElement;
    eat: HTMLAudioElement;
    app:Application
    constructor(app: Application) {
        this.stage = app.stage;
        this.snakeContainer = new Container();
        this.app=app;
        this.dead = new Audio();
        this.dead.src = "../assets/audio/dead.mp3";
        this.eat = new Audio();
        this.eat.src = "../assets/audio/eat.mp3";
        this.snake = [{ x: 8 * this.box, y: 7 * this.box },{ x: 7 * this.box, y: 7 * this.box },{ x: 6 * this.box, y: 7 * this.box },{ x: 5 * this.box, y: 7 * this.box },{ x: 4 * this.box, y: 7 * this.box }];
    }
    //drawing snake
    createSnake(size: number){
        this.snakeContainer = new Container();
        for (let i = 0; i < this.snake.length; i++) {
            let graphic = new Graphics();
            graphic.beginFill(0xffff0000);
            graphic.lineStyle(3, 0xff000000);
            graphic.drawRect(this.snake[i].x, this.snake[i].y, size, size);
            this.snakeContainer.addChild(graphic);
        }
        return this.stage.addChild(this.snakeContainer);
    }
    addLength(x: number, y: number) {
        this.dx = x;
        this.dy = y;
    }
    
    move() {
        const head = {
            x: this.snake[0].x + this.dx,
            y: this.snake[0].y + this.dy
        }
        this.snake.unshift(head);
        this.snake.pop();
    }
    snakeFood(x1:number,y1:number,x2:number,y2:number):boolean|null{
        let dis = Math.floor(Math.sqrt(Math.pow(Math.abs(x1-x2), 2) + Math.pow(Math.abs(y1 - y2), 2)));
        if (dis<32) {
            this.eat.play();
            this.score += 5;
            this.count++;
            this.eat_and_grow();
            return true;
        }
        return null;
    }
    eat_and_grow() {
        const head = {
            x: this.snake[0].x + this.dx,
            y: this.snake[0].y + this.dy
        }
        this.snake.unshift(head); 
    }
    gameWin(){
        if(this.count == 15){
            return true;
        }
    }
    gameOver(){
        //self collision need to be updated
        for(let i=1;i<this.snake.length;i++){
            if(this.snake[0].x==this.snake[i].x && this.snake[0].y==this.snake[i].y){
                this.dead.play();
                return true;
            }
        }
        //boundary collision
        if(this.snake[0].x < this.box || this.snake[0].x > this.box*17 || this.snake[0].y < this.box*3 || this.snake[0].y >  this.box*17){
            this.dead.play();
            return true;
        }
        else{
            return false;
        }
    }

}