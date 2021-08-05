import { Application, Container } from "pixi.js";

export class Food {
    stage: Container;
    box: number = 32;
    a: number=320;
    b: number=320;
    m:number|undefined;
    n:number|undefined;
    constructor(app: Application) {
        this.stage = app.stage;
    }
    foodPosition(): boolean{
         this.a = Math.floor(Math.random() * 17 + 1) * this.box;//for food
         this.b = Math.floor(Math.random() * 15 + 3) * this.box;//for food
        console.log(this.a,this.b);
        return true;
    }


}