import { Application, ParticleContainer} from 'pixi.js';
import particles = require('pixi-particles');
import { getCoin } from './texture';
export class Emitter extends ParticleContainer {
  private pEmitter: particles.Emitter;
  private gameObj: any;
  
  constructor(maxCount: number, props?:any) {
    super(maxCount, props);
    console.log("hello Emitter");
    console.log(getCoin());
    this.pEmitter = new particles.Emitter(this,
      [getCoin(), getCoin(), getCoin()],
      {
        "alpha": {
          "start": 1,//1
          "end": 0.8 //0.31
        },
        "scale": {
          "start": 0.007,//0.005
          "end": 0.010 //0.010
        },
        "color": {
          "start": "ffffff",
          "end": "ffffff"
        },
        "speed": {
          "start": 600,
          "end": 200
        },
        "acceleration": {
          "x":0,
          "y": 2000
        },
        "startRotation": {
          "min": 260,//260
          "max": 280//280
        },
        "rotationSpeed": {
          "min": 0,
          "max": 0
        },
        "lifetime": {
          "min": 0.25,//0.25
          "max": 0.7 //0.7
        },
        "blendMode": "normal",
        "frequency": 0.0005,//0.001
        "emitterLifetime": 0,//0
        "maxParticles": 1000,
        "pos": {
          "x": 0,
          "y": 0
        },
        "addAtBack": true,
        "spawnType": "circle",
        "spawnCircle": {
          "x": 0,
          "y": 0,
          "r": 0
        }
      });
  }

  public start(): void {
    this.pEmitter.emit = true;
  }

  public update(delta: number): void {
    this.pEmitter.update(delta * 0.001);
  }
}