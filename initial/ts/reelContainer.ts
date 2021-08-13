import { Container, Graphics } from 'pixi.js';
import { Reel } from './reel';

export class ReelContainer extends Container {
  private reels:Reel[] = [];

  public init(): void {
    const startX = 200;
    const startY = 75;
    const rWidth = 177;
    const symHeight = 138;
    const reelRows = 3;
    const numReels = 5;

    for (let i = 0; i < numReels; i++) {
      const reel = new Reel(i, startX + (i * rWidth), startY);
      reel.init(reelRows, rWidth, symHeight);
      this.addChild(reel);
      this.reels.push(reel);
    }
    console.log('reels ', this.reels);
    console.log('reel 1 ', this.reels[0].children[0]);
    const rMask = new Graphics();
    rMask.drawRect(startX, startY, rWidth * numReels, symHeight * reelRows);
    this.addChild(rMask);
    this.mask = rMask;
  }

  public spin(): any {
    const data:any=[];
    this.reels.forEach((reel, i) => {
      setTimeout(()=>{
        let info=reel.spin();
        data.push(info);
      }, 100 *i);
    });
    return data;
  }
}
