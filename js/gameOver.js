export class GameOver {
    constructor(canvas) {
        this.canvas = canvas;
        this.isGameOver = false;
        this.gameover = document.getElementById("gameover");
        this.youwon = document.getElementById("youwon");
        this.youlose = document.getElementById("youlose");
        this.restart = document.getElementById("restart");
    }
    showYouWin() {
        this.gameover.style.display = "block";
        this.youwon.style.display = "block";
    }
    showYouLose() {
        this.gameover.style.display = "block";
        this.youlose.style.display = "block";
    }
    draw(ctx) {
        if (this.isGameOver) {
            // CLICK ON PLAY AGAIN BUTTON
            restart.addEventListener("click", function () {
                location.reload(); // reload the page
            });

        }
    }
}