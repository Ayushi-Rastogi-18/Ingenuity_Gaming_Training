import { Application, Container, Point, Sprite, Texture } from 'pixi.js';
import { getTexture } from './texture';
import { Button } from './button';
import { ReelContainer } from './reelContainer';
import "../assets/sound/ReelSpin.wav";
import { winning } from './winning';
export class Scene extends Container {
    public initialized: boolean;

    private center: Point;

    private spin_aud: HTMLAudioElement;

    constructor(private readonly app: Application, parent: Container) {
        super();
        parent.addChild(this);
        this.spin_aud = new Audio();
        this.spin_aud.src = "../assets/sound/ReelSpin.wav";
        this.initialized = false;
        this.center = new Point(this.app.view.width / 2, this.app.view.height / 2);
    }

    public init(): void {
        this.createSprite('gameBG', this.center.x, this.center.y, 1.34);
        const reelBG = this.createSprite('reelBG', this.center.x , this.center.y-50);
        reelBG.scale.set(0.8,0.6);
        const logo = this.createSprite('gameLogo', this.center.x, 40);
        logo.scale.set(0.7);
        

        const spin = new Button('spin_normal.png', 'spin_over.png', 'spin_down.png', 'spin_disable.png');
        spin.x = this.center.x;
        spin.y = this.app.view.height * 0.735;
        spin.width = 80;
        spin.height = 80;
        this.addChild(spin);
        console.log('spin ', spin);

        const reels = new ReelContainer();
        reels.init();
        this.addChild(reels);

        const payline=this.createSprite('payline',300,300);
        payline.anchor.set(0);
        payline.scale.set(1);
        payline.width=177*3;
        payline.visible=false;

        spin.on('click', () => {
            setTimeout(()=>{this.spin_aud.play()}, 100);
            payline.visible=false;
            const detail=reels.spin()
            console.log(reels.spin());
            const result=new winning(detail as [],payline);
            // spin.enabled = false;
        });

        this.initialized = true;
    }

    public createSprite(textureId: string, x: number, y: number, sc?: number): Sprite {
        const sprite = new Sprite(getTexture(textureId) as Texture);
        sprite.anchor.set(0.5);
        sprite.position.set(x, y);
        sprite.scale.set(sc);
        return this.addChild(sprite);
    }

    public update(delta?: number) {
        delta;
    }
}
