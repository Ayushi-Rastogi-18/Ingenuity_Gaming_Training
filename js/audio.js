import { Components } from "./components.js";

export class Audio extends Components{
    constructor(){
        super();
        this.soundElement = document.getElementById("sound");
        this.soundElement.addEventListener("click", this.audioManager.bind(this));
    }    
    
    // SELECT SOUND ELEMENT
    audioManager(){
        // CHANGE IMAGE SOUND_ON/OFF
        let imgSrc = this.soundElement.getAttribute("src");
        let SOUND_IMG = imgSrc == "img/SOUND_ON.png" ? "img/SOUND_OFF.png" : "img/SOUND_ON.png";

        this.soundElement.setAttribute("src", SOUND_IMG);

        // MUTE AND UNMUTE SOUNDS
        this.WALL_HIT.muted = this.WALL_HIT.muted ? false : true;
        this.PADDLE_HIT.muted = this.PADDLE_HIT.muted ? false : true;
        this.BRICK_HIT.muted = this.BRICK_HIT.muted ? false : true;
        this.WIN.muted = this.WIN.muted ? false : true;
        this.LIFE_LOST.muted = this.LIFE_LOST.muted ? false : true;
    }
}

