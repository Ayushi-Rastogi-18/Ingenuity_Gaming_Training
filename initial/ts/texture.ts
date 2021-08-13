import { Texture, Resource, ILoaderResource } from 'pixi.js';
import { ResourceType } from './preloader';

type tTextures = { [key: string]: Texture<Resource> };

let resources: { [key: string]: ILoaderResource };

export function getAllTexture(): tTextures {
  const keys = Object.keys(resources);
  const textures: tTextures = {} as tTextures;
  keys.forEach((key) => {
    if (resources[key].texture) {
      textures[key] = resources[key].texture as Texture<Resource>;
    }
    else if (resources[key].textures) {
      if(key == "commonUI"){
        const atlasKeys1 = Object.keys(resources[key].data.frames);
        atlasKeys1.forEach((aKey:string) => {
        textures[aKey] = (resources[key].textures as tTextures)[aKey] as Texture<Resource>;
      });
      }
      else{
      const atlasKeys = resources[key].data.frames;
      atlasKeys.forEach((aKey: any, index: number) => {
      textures[aKey.filename] = (resources[key].textures as tTextures)[index] as Texture<Resource>;
      });
    }
    }
  });
  return textures;
}

export function setResources(value: ResourceType) {
  resources = value;
  getAllTexture();
}

export function getResource(id: string): ILoaderResource {
  return resources[id];
}

export function getTexture(id: string): Texture<Resource> | null {
  const textures = getAllTexture();
  if (id in textures) {
    return textures[id];
  }
  return null;
}

export function getTextureFrame(textureId: string, frameId: string): Texture<Resource> | null {
  if (textureId in resources) {
    const res = resources[textureId];
    if (res.textures && frameId in res.textures) {
      return res.textures[frameId] as Texture;
    }
  }
  return null;
}
