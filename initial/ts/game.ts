import { Application, Container, Resource, Texture, Text } from "pixi.js";
import { preloader } from './preloader';
import assets from './assets';
import { Emitter } from './emitter';

export class Game {
  private stage: Container;

  private readonly app: Application;

  private isInitialized = false;

  private emitter: Emitter | undefined;

  constructor(app: Application) {
    this.app = app;
    this.stage = app.stage;

    preloader(assets, () => {
      this.isInitialized = true;
      this.emitter = new Emitter(1000, { scale: true });
      this.stage.addChild(this.emitter);
      this.emitter.start();
      this.emitter.x = this.app.view.width / 2;
      this.emitter.y = this.app.view.height - 20;
      this.emitter.scale.set(6.2, 6);
    });
    console.warn(this.app);
    console.log("hello game class");
  }

  public update(delta: number): void {
    if (this.isInitialized && this.emitter) {
      this.emitter.update(delta);
    }
  }
}