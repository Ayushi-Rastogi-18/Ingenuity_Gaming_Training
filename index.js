var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var dragging = false;
var dragStartLoc, snap, position;

function getCoordinates(e) {
    var x = e.clientX - canvas.getBoundingClientRect().left;
    var y = e.clientY - canvas.getBoundingClientRect().top;
    return { x: x, y: y };
}
function takeSnap() {
    snap = ctx.getImageData(0, 0, canvas.width, canvas.height);
}
function restoreSnap() {
    ctx.putImageData(snap, 0, 0);
}

//For drawing a straight Line.
function drawLine(position) {
    ctx.beginPath();
    ctx.moveTo(dragStartLoc.x, dragStartLoc.y);
    ctx.lineTo(position.x, position.y);
    ctx.stroke();
}
//For drawing a circle.
function drawCircle() {
    var radius = Math.sqrt(Math.pow((dragStartLoc.x - position.x), 2) + Math.pow((dragStartLoc.y - position.y), 2));
    ctx.beginPath();
    ctx.arc(dragStartLoc.x, dragStartLoc.y, radius, 0, 2 * Math.PI, false);
    //ctx.fill();
}
//For drawing rectangle.
function drawRect(position) {
    var width = dragStartLoc.x - position.x;
    var height = dragStartLoc.y - position.y;
    ctx.beginPath();
    ctx.rect(dragStartLoc.x, dragStartLoc.y, width, height);
    //ctx.fill();
}
//For drawing Square.
function drawSquare(position) {
    let a = dragStartLoc.x - position.x;
    ctx.beginPath();
    ctx.rect(dragStartLoc.x, dragStartLoc.y, a, a);
}

function dragStart(e) {
    dragging = true;
    dragStartLoc = getCoordinates(e);
    takeSnap();
}
function drag(e) {
    if (dragging === true) {
        position = getCoordinates(e);
    }
    draw(position, "line");
}
function dragStop(e) {
    var fillbox;
    dragging = false;
    restoreSnap();
    position = getCoordinates(e);
    draw(position, "line");
}

//Generic Function
function draw(position) {
    var fillBox = document.getElementById("fillBox");
    var shape = document.querySelector('input[type="radio"][name="shape"]:checked').value;
    var lineCap = document.querySelector('input[type="radio"][name="lineCap"]:checked').value;
    ctx.lineCap = lineCap;

    if (shape === "line") {
        drawLine(position);
    }
    if (shape === "circle") {
        drawCircle(position);
    }
    if (shape === "rectangle") {
        drawRect(position);
    }
    if (shape === "square") {
        drawSquare(position);
    }
    if (fillBox.checked) {
        ctx.fill();
    }
    else {
        ctx.stroke();
    }
}

function changeLineWidth() {
    ctx.lineWidth = this.value;
    e.stopPropagation();
}
function changeFillStyle() {
    ctx.fillStyle = this.value;
    e.stopPropagation();
}
function changeStrokeStyle() {
    ctx.strokeStyle = this.value;
    e.stopPropagation();
}
function changeBgColor(){
    ctx.save();
    ctx.fillStyle = document.getElementById("bgColor").value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function init() {
    var lineWidth = document.getElementById("lineWidth");
    var fillColor = document.getElementById("fillColor");
    var strokeColor = document.getElementById("strokeColor");
    var bgColor = document.getElementById("bgColor");
    var clearCanvas = document.getElementById("clearCanvas");

    ctx.strokestyle = strokeColor.value;
    ctx.lineWidth = lineWidth.value;
    ctx.fillStyle = fillColor.value;

    canvas.addEventListener("mousedown", dragStart, false);
    canvas.addEventListener("mouseemove", drag, false);
    canvas.addEventListener("mouseup", dragStop, false);
    lineWidth.addEventListener("input", changeLineWidth, false);
    fillColor.addEventListener("input", changeFillStyle, false);
    strokeColor.addEventListener("input", changeStrokeStyle, false);
    bgColor.addEventListener("input", changeBgColor, false);
    clearCanvas.addEventListener("click", clear, false);
}
window.addEventListener("load", init, false);