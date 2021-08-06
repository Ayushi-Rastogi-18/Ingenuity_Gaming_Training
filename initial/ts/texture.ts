import { BaseTexture, ILoaderResource, Rectangle, Resource, Texture, Sprite } from "pixi.js";

let resource: { [key: string]: ILoaderResource };
let texture: { [key: string]: Texture<Resource> } = {} as { [key: string]: Texture<Resource> };
export function loadtexture(res: { [key: string]: ILoaderResource }) :{ [key: string]: Texture<Resource> }{
    resource=res;
    const keys = Object.keys(res);
    console.log(keys);
    keys.forEach(ele => {
        console.log(res[ele].url);
        texture[ele] = res[ele].texture as Texture<Resource>;
    });
    return texture;
}
export function selectTexture(id:string):Texture<Resource>|null{
    if(id in texture){
        console.log("selected",texture[id],"selected");
        return texture[id] as Texture<Resource>
    }
    return null;
}

export function getCoin(){
    let coin: Texture = selectTexture('coin') as Texture<Resource>;
    return coin;
}
