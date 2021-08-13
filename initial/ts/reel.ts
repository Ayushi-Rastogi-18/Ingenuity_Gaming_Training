import { Container } from 'pixi.js';
import { gsap } from 'gsap';
import { ReelSymbol } from './reelSymbol';
import { Reels } from './symbol.config';

export class Reel extends Container {
  private symbolHeight = 0;

  private currentStop = 89;

  private symbols: ReelSymbol[] = [];

  constructor(private reelNum: number, x: number, private initY: number) {
    super();
    this.x = x;
    this.y = initY;
  }

  public init(rows: number, symWidth: number, symHeight: number): void {
    this.symbolHeight = symHeight;
    const startY = -(symHeight * 2);
    for (let i = 0; i < rows + 4; i++) {
      const symId = this.getSymbolID(i);
      const symbol = new ReelSymbol(symId);
      symbol.scale.set(0.6);
      symbol.x = symWidth / 2;
      symbol.y = startY + (i * symHeight) + (symHeight / 2);
      this.addChild(symbol);
      this.symbols.push(symbol);
    }
  }

  private getSymbolID(stop: number): number {
    const reelValue = Reels[this.reelNum][Math.floor(Math.random()*this.currentStop)];
    return reelValue;
  }

  public spin(): ReelSymbol[] {
    gsap.to(this, {
      y: '-=45',
      duration: 0.25,
      yoyo: true,
      onComplete: () => {
        this.symbols.forEach((symbol: ReelSymbol) => {
          symbol.blur();
        });
        gsap.to(this, {
          y: `+=${this.symbolHeight}`,
          duration: 0.1,
          repeat: 25,
          onRepeat: () => {
            this.symbols.forEach((symbol: ReelSymbol, i: number) => {
              symbol.setIconTexture(this.getSymbolID(i));
            });
          },
          onComplete: () => {
            gsap.fromTo(this, { y: this.initY + 45 }, {
              y: this.initY,
              duration: 0.25,
              ease: 'Bounce.out',
              onStart: () => {
                this.symbols.forEach((symbol: ReelSymbol) => {
                  symbol.unBlur();
                });
                
              },
              onComplete:()=>{
              }
            });
          },
        });
      },
    });
    return this.symbols;
  }
}
