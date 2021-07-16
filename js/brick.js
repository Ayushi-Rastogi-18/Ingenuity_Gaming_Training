import {BaseBox} from "./baseBox.js";

export class Brick extends BaseBox {
    constructor(props) {
        super(props);
        this.score = props.score;
    }
}