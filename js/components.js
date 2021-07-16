export class Components {
    constructor(){
        // LOAD BG IMAGE
        this.BG_IMG = new Image();
        this.BG_IMG.src = "img/game bg1.jpg";

        this.LEVEL_IMG = new Image();
        this.LEVEL_IMG.src = "img/level.png";

        this.LIFE_IMG = new Image();
        this.LIFE_IMG.src = "img/life.png";

        this.SCORE_IMG = new Image();
        this.SCORE_IMG.src = "img/score.png";

        /////// LOAD SOUNDS ////////

        this.WALL_HIT = new Audio();
        this.WALL_HIT.src = "sounds/wall.mp3";

        this.LIFE_LOST = new Audio();
        this.LIFE_LOST.src = "sounds/life_lost.mp3";

        this.PADDLE_HIT = new Audio();
        this.PADDLE_HIT.src = "sounds/paddle_hit.mp3";

        this.WIN = new Audio();
        this.WIN.src = "sounds/win.mp3";

        this.BRICK_HIT = new Audio();
        this.BRICK_HIT.src = "sounds/brick_hit.mp3";
    }
}
