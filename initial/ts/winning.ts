import { Sprite } from "pixi.js";
import { ReelSymbol } from "./reelSymbol";


export class winning {
    data: Array<String>[] = [];
    symbols: any
    win: Array<number>[] = [];
    constructor(symbols: Array<ReelSymbol>[], payline: Sprite) {

        this.symbols = symbols;

        setTimeout(() => {
            symbols.forEach((ele: any) => {
                let row = "";
                let array: Array<String> = [];
                ele.forEach((data: any) => {
                    array.push(data.symbolId);
                })
                this.data.push(array);
            });
            this.decideWIN(payline);
        }, 5000);
    }
    decideWIN(payline: Sprite) {
        let symbols = this.data;
        const pass = "Wild";
        const lottery = "Scatter";
        for (let i = 2; i < 5; i++) {
            let row = "";
            for (let j = 0; j < 3; j++) {
                if (symbols[j][i] == lottery) {
                    continue;
                }
                if ((symbols[j][i] == symbols[j + 1][i]) || symbols[j][i] == pass || symbols[j + 1][i] == pass) {
                    if (symbols[j + 2][i] == symbols[j][i] || symbols[j + 2][i] == pass || symbols[j + 2][i] == symbols[j + 1][i]) {
                        console.log(`winning at ${i} ->${j}&${j + 1}&${j + 2}`);
                        this.win.push([i, j]);
                        j += 2;
                    }
                }

            }
        }
        console.log(this.win);
        this.win.forEach(data => {
            payline.x = 200 + data[1] * 177 ;
            payline.y = 75 + (data[0]-1.75) * 138;
            payline.visible = true;
        })
    }
}