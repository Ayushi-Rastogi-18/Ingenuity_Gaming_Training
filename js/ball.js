import { Audio } from "./audio.js";
export class Ball {
    constructor(props) {
        this._x = props.x;
        this._y = props.y;
        this._r = props.radius;
        this.bounds = props.bounds;
        this.speed = 1;
        this.maxSpeed = 4;
        this.dy = -3;
        this.dx = 3 * (Math.random() * 2 - 1);
        this.isAlive = true;
        this.isActive = false;
        this.audio=new Audio();
    }
    set x(value) {
        this._x = value;
    }
    get x() {
        return this._x
    }

    set y(value) {
        this._y = value;
    }
    get y() {
        return this._y;
    }

    get radius() {
        return this._r;
    }
    bounce() {
        this.isActive = true;
        this.speed = this.maxSpeed;
        this.dy = -1;
        this.dx = 1;
    }
    bounceUp() {
        this.dy *= -1;
    }
    update() {//ballwallcollision
        if (this.isActive) {
            if (this._x < this._r || this._x + this._r > this.bounds.right) {
                this.dx = -this.dx;
                this.audio.WALL_HIT.play();
            }
            if (this._y - this._r <= this.bounds.top) {
                this.dy = -this.dy;
                this.audio.WALL_HIT.play();
            }
            if (this._y + this._r > this.bounds.bottom) {
                this.speed = 0;
                this.isAlive = false;
                this.audio.LIFE_LOST.play();
            }
          
            this._x += this.speed * this.dx;
            this._y += this.speed * this.dy;
        }
    }
    draw(ctx) {
        if (this.isAlive) {
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(this._x, this._y, this._r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }
}