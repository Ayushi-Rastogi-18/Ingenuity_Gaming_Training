import { Application, Container} from 'pixi.js';

import { preLoader } from './preloader';
import assets from './assets';
import { Scene } from './scene';
import { getAllTexture } from './texture';

export class Game {
    private readonly stage: Container;

    private readonly app: Application;

    private baseScene: Scene;

    private isInitialized = false;

    constructor(app: Application) {
        this.app = app;
        this.stage = app.stage;
       
        this.baseScene = new Scene(this.app, this.stage);

        preLoader(assets, () => {
            this.baseScene.init();
            this.isInitialized = true;
            console.log(this.app);
        });
    }

    public update(delta: number): void {
        if (this.isInitialized && this.baseScene.initialized) {
            this.baseScene.update(delta);
        }
    }
}
