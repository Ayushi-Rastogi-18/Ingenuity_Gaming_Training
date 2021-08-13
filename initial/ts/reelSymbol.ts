import { Sprite, Texture } from 'pixi.js';
import { BlurFilter } from '@pixi/filter-blur';
import { getTexture } from './texture';
import { SymbolIDs } from './symbol.config';

export class ReelSymbol extends Sprite {
  private normalTexture: Texture|undefined;

  private blurTexture: Texture|undefined;

  private isBlurred: boolean;

  public symNum: number|undefined;

  public symbolId: string|undefined;

  public setIconTexture(id: number) {
    this.symNum = id;
    this.symbolId = SymbolIDs[id];
    this.normalTexture = getTexture(`${this.symbolId}.png`) as Texture;
    this.blurTexture = getTexture(`${this.symbolId}_blur`) as Texture;
    this.texture = this.isBlurred ? this.blurTexture : this.normalTexture;
  }

  constructor(symId: number) {
    super();
    this.symNum = symId;
    this.symbolId = SymbolIDs[symId];
    this.setIconTexture(symId);
    this.anchor.set(0.5);
    this.isBlurred = false;
  }

  public blur(): void {
    this.isBlurred = true;
    if (this.blurTexture) {
      this.texture = this.blurTexture;
    } else {
      const blur = new BlurFilter(20, 10);
      this.filters = [blur];
    }
  }

  public unBlur(): void {
    this.isBlurred = false;
    this.texture = this.normalTexture as Texture;
    this.filters = null;
  }
}
