import { AnimatedSprite, Application, Container, DEG_TO_RAD, Graphics, Resource, Sprite, Text, Texture, Ticker, TilingSprite } from "pixi.js";

import { gsap } from 'gsap';
import { preloader } from "./preloader";
import list from './assets';
import { loadtexture, selectTexture } from "./texture";
export class Game {
    app: Application;
    stage: Container;
    fps: Text;
    wheel: Sprite | undefined;
    pin: Sprite | undefined;
    deg: number;
    pinpoint: Container;
    needle:Graphics|undefined;
    prizes: Array<number>
    arcangle: number;
    score: number = 0;
    cc: any | undefined;
    moving: boolean | undefined;
    amount:number|undefined;
    message:Text|undefined;
    congo:Sprite|undefined;
    constructor(app: Application) {
        this.app = app;
        this.stage = app.stage;
        this.pinpoint=new Container();
       
        this.deg = 0;
        this.prizes = [50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800];
        this.arcangle = 360 / this.prizes.length;
        this.fps = this.createText("", 0, 0, 0);
        const pinCircle = new Graphics();
        pinCircle .beginFill();
        pinCircle .drawCircle(this.app.view.width / 2,this.app.view.height / 2+20, 25);
        
        preloader(list, () => {
            this.wheel = this.createSprite(selectTexture('wheel') as Texture, this.app.view.width / 2, this.app.view.height / 2 + 20);
            this.wheel.scale.set(2);
            this.congo = this.createSprite(selectTexture('congo') as Texture, this.app.view.width / 2, this.app.view.height / 2 + 20);
            this.congo.scale.set(1.5);
            this.congo.visible=false;

            this.createpointer();
            

            this.message=this.createText("CONGRATULATIONS! YOU WON $",this.app.view.width/2,50,0.5);
            this.message.visible=false;
            
            this.wheel.interactive=true;
            (this.wheel as Sprite).on('click', () => {
                const audio=document.querySelector("audio")as HTMLAudioElement;
                audio.src="../assets/audio/spinning.wav";
                audio.play();
                (this.wheel as Sprite).interactive=false;
                (this.message as Text).visible=false;
                (this.congo as Sprite).visible=false;
                console.log((this.wheel as Sprite).interactive);
               this.generatingAmount();
            });
            console.log(this.app);
            
         } );
    }
    createpointer(){
        const pinCircle = new Graphics();
            pinCircle .beginFill();
            pinCircle .drawCircle(this.app.view.width / 2,this.app.view.height / 2+20, 25);
            pinCircle.endFill();
            const pinneedle=new Graphics();
            pinneedle.beginFill();
            pinneedle.moveTo(this.app.view.width/2-25,this.app.view.height/2+25);
            pinneedle.lineTo(this.app.view.width/2,this.app.view.height/2-50);
            pinneedle.lineTo(this.app.view.width/2+25,this.app.view.height/2+25);
            pinneedle.endFill();
            this.needle=pinneedle;
            this.needle.position.set(this.app.view.width/2,this.app.view.height/2+20)
            this.needle.pivot.set(this.app.view.width/2,this.app.view.height/2+20)
            this.pinpoint.addChild(pinCircle);
            this.pinpoint.addChild(pinneedle);
            this.stage.addChild(this.pinpoint);
    }
    generatingAmount(){
        let win = Math.floor(Math.random() * this.prizes.length)
        console.log(win);
        console.log(this.arcangle);
        this.amount=this.prizes[win];
    
        if(win>0){
        win-=1
        this.amount=this.prizes[win];
        }
        console.log((win) * this.arcangle);
        this.deg = 3*360+((win) * this.arcangle)+(Math.random()-0.5)*(this.arcangle*0.7);
        console.log(this.deg);
        this.moving = true;
        this.rotatingWheel();
        this.score += win;
    }
    rotatingWheel() {
        if (this.wheel)
            gsap.fromTo(this.wheel, { rotation: 0 }, {
                rotation: DEG_TO_RAD * (this.deg),
                duration: 10,
                ease: 'Sine.easeOut',
                onComplete: () => {
                    this.moving = false;
                    this.deg=0;
                    (this.wheel as Sprite).interactive=true;
                    (this.message as Text).visible=true;
                    (this.pinpoint as Container).visible=false;
                    (this.congo as Sprite).visible=true;
                    const audio=document.querySelector("audio") as HTMLAudioElement;
                    audio.src="../assets/audio/winsound.wav";
                    audio.play();
                    setTimeout(()=>{
                        (this.congo as Sprite).visible=false;
                        (this.pinpoint as Container).visible=true;
                        (this.message as Text).visible=false;
                    },4000);

                }
            });
    }
    createText(entry: string, x: number, y: number, a: number): Text {
        let text: Text = new Text(entry,{
            fontFamily: "cursive",
            fontSize: "50px",
            fontStyle: "italic",
            fill: "black",
        });
        text.position.set(x, y);
        text.anchor.set(a);
        return this.stage.addChild(text);
    }
    createSprite(texture: Texture<Resource>, x: number, y: number): Sprite {
        let img = Sprite.from(texture);
        img.position.set(x, y);
        img.anchor.set(0.5);
        return this.stage.addChild(img);
    }
    animate(delta: number) {
        this.fps.text = Ticker.shared.FPS.toFixed(2);
        if(this.message)
        this.message.text="CONGRATULATIONS! YOU WON $ "+this.amount ;
    
        let tilt = 0.05;
        if (this.moving && this.cc == undefined) {
            this.cc = (setInterval(() => {
                tilt = -1 * tilt;
                (this.needle as Graphics).rotation = tilt;

            }, 10));
        }
        else if (this.moving == false) {
            clearInterval(this.cc);
            this.cc=undefined;
        }

        console.log(this.cc, this.moving,this.wheel?.interactive);
    }
}