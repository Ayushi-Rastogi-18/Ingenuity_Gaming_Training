export type Assets = {
    baseUrl: string;
    images:{ key:string, url:string }[];
  };
  export default {
    baseUrl: './assets/',
    images: [
      {
        key: 'gameBG',
        url: 'images/background.jpg',
      },
      {
        key: 'payline',
        url: 'images/payline.png',
      },
      {
        key: 'reelBG',
        url: 'images/Basegame_Reel.png',
      },
      {
        key: 'gameLogo',
        url: 'images/Logo.png',
      },
      {
        key: 'commonUI',
        url: 'images/buttonPanel/Common_ui.json',
      },
      {
        key: 'symbols',
        url: 'images/symbols/symbols.json',
      },
      {
        key: 'symbolsBlur',
        url: 'images/symbols/symbols_blur.json',
      },
    ],
  };
  