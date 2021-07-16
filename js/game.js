import { Paddle } from "./paddle.js";
import { Ball } from "./ball.js";
import { GameOver } from "./gameOver.js";
import { bricks } from "./brickLayout.js";
import { Brick } from "./brick.js";
import { BaseBox } from "./baseBox.js";
import { Components } from "./components.js";

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.isRunning = false;
        this.score = 0;
        this.lives = 3;
        this.LEVEL = 1;
        this.MAX_LEVEL = 2;
    }
    start() {
        this.img = new Components();
        this.gameOver = new GameOver(this.canvas);
    
        this.bricksCollection = [];
        bricks[this.LEVEL-1].forEach((brickLayout, index) => {
            for (let r = 0; r < brickLayout.rows; r++) {
                for (let c = 0; c < brickLayout.columns; c++) {
                    const brick = new Brick({
                        x: brickLayout.x + (c * (brickLayout.width + brickLayout.padding)),
                        y: brickLayout.y + (r * (brickLayout.height + brickLayout.padding)),
                        width: brickLayout.width,
                        height: brickLayout.height,
                        color: brickLayout.color,
                        score: brickLayout.score
                    });
                    this.bricksCollection.push(brick);
                }
            }
        });
        this.paddle = new Paddle({
            x: this.canvas.width / 2,
            y: this.canvas.height - 50,
            width: 100,
            height: 20,
            color: 'blue',
            strokeColor: 'white',
            maxXBound: this.canvas.width
        });
        this.ball = new Ball({
            x: this.canvas.width / 2,
            y: this.canvas.height - 70,
            radius: 10,
            bounds: {
                left: 0,
                top: 0,
                right: this.canvas.width,
                bottom: this.canvas.height
            }
        });
       
    }
    reset() {
        this.paddle.isAlive = true;
        this.paddle.x = this.canvas.width / 2 - this.paddle.width / 2;
        this.paddle.y = this.canvas.height - 50 - this.paddle.height / 2;
        this.ball.isAlive = true;
        this.ball.x = this.canvas.width / 2;
        this.ball.y = this.canvas.height - 70;
    }
    onKeyDown(kev) {
        if (this.gameOver.isGameOver) {
            kev.preventDefault();
            return;
        }
        switch (kev.code) {
            case 'ArrowLeft':
                this.paddle.move('left');
                break;
            case 'ArrowRight':
                this.paddle.move('right');
                break;
        }
    }
    onKeyUp(kev) {
        if (this.gameOver.isGameOver) {
            kev.preventDefault();
            return;
        }
        switch (kev.code) {
            case 'ArrowLeft':
            case 'ArrowRight':
                this.paddle.stop();
                break;
            case 'Space':
            case 'KeyS':
                this.ball.bounce();
                this.isRunning = true;
                break;
        }
    }
    update() {
        if (this.gameOver.isGameOver) {
            return;
        }
        if (!this.isRunning) {
            return;
        }
        this.paddle.update();
        this.ball.update();
        if (this.paddle.hitTest(this.ball)) {
            this.ball.bounceUp();
            this.ball.audio.PADDLE_HIT.play();
        }
        this.bricksCollection.forEach(brick => {
            if (brick.isAlive && brick.hitTest(this.ball)) {
                this.ball.audio.BRICK_HIT.play();
                brick.isAlive = false;
                this.ball.bounceUp();
                this.score += brick.score;
            }
        });
        if (!this.ball.isAlive) {
            this.lives--;
            if (this.lives === 0) {
                this.gameOver.showYouLose();
                this.gameOver.isGameOver = true;
            }
            this.paddle.isAlive = false;
            this.isRunning = false;
            setTimeout(this.reset.bind(this), 500);
        }
        this.levelUp();
    }
    // level up
    levelUp() {
        this.isLevelDone = true;
        this.bricksCollection.forEach(brick => {
            if(brick.isAlive == true)
                this.isLevelDone = false;
        });
        if(this.isLevelDone == true){
            this.ball.speed += 0.5;
            this.paddle.maxSpeed++;
            this.LEVEL++;
            console.log("level up");
            if(this.LEVEL > this.MAX_LEVEL) {
                this.gameOver.showYouWin();
                this.gameOver.isGameOver = true;
                return;
            }
            this.reset();
            this.start();
        }               
    }

    draw() {
        let canvas = this.canvas;
        let ctx = this.ctx;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(this.img.BG_IMG, 0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(this.img.LIFE_IMG, 10, 8, 30, 30);//lives
        ctx.drawImage(this.img.LEVEL_IMG, this.canvas.width/2 - 35, 8, 25, 25);//level
        ctx.drawImage(this.img.SCORE_IMG, this.canvas.width - 95, 12, 25, 25);//score
        
        ctx.font = '20px Arial Bold';
        ctx.fillStyle = 'WHITE';
        ctx.textAlign = 'left';
        ctx.fillText(`: ${this.lives}`, 45, 30);
        ctx.textAlign = 'middle';
        ctx.fillText(`: ${this.LEVEL}`, this.canvas.width/2, 30);
        ctx.textAlign = 'right';
        ctx.fillText(`: ${this.score}`, 770, 30);

        this.paddle.draw(ctx);
        this.ball.draw(ctx);
        this.bricksCollection.forEach(brick => brick.draw(ctx));
        this.gameOver.draw(ctx);
    }
}