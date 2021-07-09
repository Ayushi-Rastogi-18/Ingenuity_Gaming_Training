import { game } from './game.js';
export class draw extends game {

    initDraw() {
        let ctx = this.canvas.getContext('2d');
    
        if(this.car.complete && this.road.complete && this.bg.complete){
            if(((this.x + this.speed * this.mod)>=(this.canvas.width/3))&&(this.x + this.speed * this.mod)<=(this.canvas.width*(2/3))-this.carW){
                this.x += this.speed * this.mod;
            }
            if((this.y + this.speed * this.dir)>=0 && (this.y + this.speed * this.dir)<=this.canvas.height-this.carH){
                this.y += this.speed * this.dir;
            }
            console.log(this.x,this.y);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.bg, 0 ,0 , canvas.width,canvas.height);
        ctx.drawImage(this.road, this.canvas.width/3 ,0 , this.canvas.width/3, this.canvas.height);
        ctx.drawImage(this.car, this.x, this.y, this.carW, this.carH);
        requestAnimationFrame(this.initDraw.bind(this));
        }
        
    }

}
