import { ILoaderResource, Loader, Point, Application, Container } from 'pixi.js';
import { setResources } from './texture';
import { Assets } from './assets';
import { Scene } from './scene';


function addAssets(loader: Loader, assets: { key: string, url: string }[]): void {
    assets.forEach((asset) => {
        loader.add(asset);
    });
}
export type ResourceType = { [key: string]: ILoaderResource };

let progDiv: HTMLDivElement;
function showProgress(e: any) {
    if (progDiv === undefined) {
        progDiv = document.querySelector('.progress') as HTMLDivElement;
    }
    progDiv.style.width = `${e.progress}%`;
}

function loadComplete(
    loader: Loader,
    resources: ResourceType,
    onCompleteCallback: (l: Loader, r: ResourceType) => void,
): void {
    setResources(resources);
    setTimeout(() => {

        (<HTMLDivElement>document.querySelector('#bar')).style.visibility = 'hidden';
        (<HTMLDivElement>document.querySelector('#message')).innerHTML = 'Click/Tap here to continue';
        const preloader = (<HTMLDivElement>document.querySelector('#preloader'));
        preloader.style.background = 'url("./assets/images/loading_img.png") no-repeat center center/cover';
        preloader.onclick = (e) => {
            preloader.style.display = 'none';
            onCompleteCallback(loader, resources);
        };
    }, 1000);
}

export function preLoader(
    assetList: Assets,
    callback: (l?: Loader, r?: ResourceType) => void,
): Loader {
    const loader = Loader.shared;
    if (assetList.baseUrl) {
        loader.baseUrl = assetList.baseUrl;
    }
    addAssets(loader, assetList.images);
    loader.onProgress.add(showProgress);
    loader.onComplete.add((l: Loader, res) => {
        loadComplete(l, res as any, callback);
    });
    loader.load();
    return loader;
}
