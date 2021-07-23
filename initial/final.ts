import "./images/pause.png";
import "./images/play.png";
import "./images/shuffleoff.png";
import "./images/shuffleon.png";
import "./images/skin1.png";
import "./images/skin2.png";
import "./images/speakeroff.png";
import "./images/speakeron.png";
import "./audios/Baby.mp3";
import "./audios/Beatback.mp3";
import "./audios/Beautiful.mp3";
import "./audios/BrownMunde.mp3";
import "./audios/ElBano.mp3";
import "./style.css";

// onload = function(){
let seeking: boolean,
    seekTo: number,
    shuffling: boolean = false,
    dir: string = "audios/",
    playList: Array<string> = ["Baby.mp3", "Beatback.mp3", "Beautiful.mp3", "BrownMunde.mp3", "ElBano.mp3"],
    index: number = 0,
    //Set object references
    playBtn: HTMLElement = document.querySelector("#playpauseBtn"),
    muteBtn: HTMLElement = document.getElementById("muteBtn"),
    seekSlider: HTMLElement = document.getElementById("seekSlider"),
    volumeSlider: HTMLElement = document.getElementById("volumeSlider"),
    shuffleBtn: HTMLElement = document.getElementById("shuffleBtn"),
    curTime: HTMLElement = document.getElementById("curTime"),
    durTime: HTMLElement = document.getElementById("durTime"),
    status: HTMLElement = document.getElementById("status"),
    trackBox: HTMLElement = document.getElementById("trackBox"),
    playingTrack: HTMLElement = document.getElementById("playingTrack");


let ap: HTMLElement = document.getElementById("audio_player");
ap.style.background = "url(./images/skin2.png) no-repeat";
playBtn.style.background = "url(./images/pause.png) no-repeat";
shuffleBtn.style.background = "url(./images/shuffleoff.png) no-repeat";
muteBtn.style.background = "url(./images/speakeron.png) no-repeat";

audioTrack();
function setup(){
let pb = document.querySelectorAll(".playButton");
    Array.from(pb).forEach(element => {
        element['style'].background = "url(images/play.png) no-repeat";
    });
}
setup();
setInterval(() => {
let pb = document.querySelectorAll(".playButton");
    Array.from(pb).forEach(element => {
        element['style'].backgroundColor = `rgb(187, 15, 164)`;
    });
    let bb = document.querySelectorAll("#audio_controls>button");
    Array.from(bb).forEach(element => {
        element['style'].backgroundColor = `rgb(187, 15, 164)`;
    });
    let bb1 = document.querySelectorAll("#audio_controls>button:hover");
    Array.from(bb1).forEach(element => {
        element['style'].backgroundColor = `aqua`;
    });
}, 1)



let audio: HTMLAudioElement = new Audio();
audio.src = dir + playList[0];
audio.loop = false;
playingTrack.innerText = `${playList[0]}`;
testPlayer();
status.innerHTML = "Track " + " - " + `${playList[index]}` + " is playing";

//Add event handling
playBtn.addEventListener("click", playPause);
muteBtn.addEventListener("click", mute);
shuffleBtn.addEventListener("click", shuffle);
seekSlider.addEventListener("mousedown", function (event) { seeking = true; seek(event) });
seekSlider.addEventListener("mousemove", function (event) { seek(event); });
seekSlider.addEventListener("mouseup", function () { seeking = false; });
volumeSlider.addEventListener("mousemove", setVolume);
audio.addEventListener("timeupdate", function () { seekTimeUpdate(); });
audio.addEventListener("ended", function () { switchTrack(); });

function shuffle(): void {
    if (!shuffling) {
        shuffling = true;
        shuffleBtn.style.background = "url(images/shuffleon.png)";
        playList.sort(() => .5 - Math.random());
        trackBox.innerHTML = '';
        playingTrack.innerText = `${playList[0]}`;
        audioTrack();
        audio.src = dir + playList[0];
        audio.play();
    } else {
        shuffling = false;
        shuffleBtn.style.background = "url(images/shuffleoff.png)";
        audio.pause();
    }
    setup();
}

function audioTrack(): void {
    let audio_index: number = 1;
    let isPlaying: boolean = false;
    let tracks: any = {
        "track1": [`${playList[0]}`, `${playList[0]}`],
        "track2": [`${playList[1]}`, `${playList[1]}`],
        "track3": [`${playList[2]}`, `${playList[2]}`],
        "track4": [`${playList[3]}`, `${playList[3]}`],
        "track5": [`${playList[4]}`, `${playList[4]}`]
    };
    for (var tr in tracks) {
        var tb = document.createElement("div");
        var pb = document.createElement("button");
        var tn = document.createElement("div");
        tb.className = "trackBar";
        pb.className = "playButton";
        tn.className = "trackName";
        tn.innerHTML = `${audio_index + ". " + tracks[tr][0]}`;
        pb.id = `${tracks[tr][1]}`;
        pb.addEventListener("click", alterTrack);
        tb.appendChild(pb);
        tb.appendChild(tn);
        trackBox.append(tb);
        audio_index++;
    }

    function alterTrack(event): void {
        if (isPlaying) {
            if (playingTrack.innerText != event.target.id) {
                isPlaying = true;
                document.getElementById(`${playingTrack.innerText}`).style.background = "url(images/play.png)";
                playBtn.style.background = "url(/images/play.png) no-repeat";
                event.target.style.background = "url(/images/pause.png)";
                audio.src = dir + event.target.id;
                audio.play();
            } else {
                audio.pause();
                isPlaying = false;
                event.target.style.background = "url(images/play.png)";
                playBtn.style.background = "url(images/play.png) no-repeat";
            }
        } else {
            isPlaying = true;
            event.target.style.background = "url(images/pause.png)";
            playBtn.style.background = "url(images/pause.png) no-repeat";
            if (playingTrack.innerText != event.target.id) {
                audio.src = dir + event.target.id;
            }
            audio.play();
        }
        playingTrack.innerText = event.target.id;
    }
}


function switchTrack(): void {
    if (index == (playList.length - 1)) {
        index = 0;
    } else {
        index++;
    }
    audio.src = dir + playList[index];
    playingTrack.innerText = playList[index];
    status.innerHTML = "Track " + " - " + `${playingTrack.innerText}` + " is playing";
    audio.play();
}
setInterval(state, 1);
function state() {
    status.innerHTML = "Track " + " - " + `${playingTrack.innerText}` + " is playing";
}
function playPause(): void {
    if (audio.paused) {
        audio.play();
        playBtn.style.background = "url(images/pause.png) no-repeat";
    } else {
        audio.pause();
        playBtn.style.background = "url(images/play.png) no-repeat";
    }
}

function mute(): void {
    if (audio.muted) {
        audio.muted = false;
        muteBtn.style.background = "url(images/speakeron.png) no-repeat";
    } else {
        audio.muted = true;
        muteBtn.style.background = "url(images/speakeroff.png) no-repeat";
    }
}

function seek(event): void {
    if (seeking) {
        seekSlider['value'] = String(event.clientX - seekSlider.offsetLeft);
        seekTo = audio.duration * (Number(seekSlider['value']) / 100);
        audio.currentTime = seekTo;
    }
}

function setVolume(): void {
    audio.volume = Number(volumeSlider['value']) / 100;
}

function seekTimeUpdate(): void {
    var nt: number = audio.currentTime * (100 / audio.duration);
    seekSlider['value'] = String(nt);
    var curMins: any = Math.floor(audio.currentTime / 60);
    var curSecs: any = Math.floor(audio.currentTime - curMins * 60);
    var durMins: any = Math.floor(audio.duration / 60);
    var durSecs: any = Math.floor(audio.duration - durMins * 60);
    if (curSecs < 10) { curSecs = "0" + curSecs; }
    if (durSecs < 10) { durSecs = "0" + durSecs; }
    if (curMins < 10) { curMins = "0" + curMins; }
    if (durMins < 10) { durMins = "0" + durMins; }
    curTime.innerHTML = curMins + ":" + curSecs;
    durTime.innerHTML = durMins + ":" + durSecs;
}
// Animation Visuals
// Create a new instance of an audio object and adjust some of its properties
audio.controls = true;
//audio.loop = true;
audio.autoplay = true;
// Establish all variables that your Analyser will use
let canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, source: any, context: any, analyser: any, fbc_array, bars: number, bar_x: number, bar_width: number, bar_height: number;
// Initialize the MP3 player after the page loads all of its HTML into the window
function testPlayer(): void {
    document.getElementById('audioBox').appendChild(audio);
    const AudioContext = window.AudioContext;
    context = new AudioContext(); // AudioContext object instance
    analyser = context.createAnalyser(); // AnalyserNode method
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    // Re-route audio playback into the processing graph of the AudioContext
    source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);
    frameLooper();
}
// frameLooper() animates any style of graphics you wish to the audio frequency
// Looping at the default frame rate that the browser provides(approx. 60 FPS)
function frameLooper(): void {
    window.requestAnimationFrame(frameLooper);
    fbc_array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(fbc_array);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillStyle = '#00CCFF'; // Color of the bars
    bars = 100;
    for (var i = 0; i < bars; i++) {
        bar_x = i * 3;
        bar_width = 2;
        bar_height = -(fbc_array[i] / 2);
        //  fillRect( x, y, width, height ) // Explanation of the parameters below
        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
    }
}

