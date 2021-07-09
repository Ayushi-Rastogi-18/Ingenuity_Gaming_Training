var canvas, ctx,
    dragging = false,
    dragStartLoc, snap, position;

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

//For drawing free hand with brush pen.
function drawFree(position){
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(dragStartLoc.x, dragStartLoc.y);
    console.log(position.x, position.y);
    ctx.lineTo(position.x, position.y);
    ctx.stroke();
    dragStartLoc = position;
    takeSnap();
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
}
//For drawing rectangle.
function drawRect(position) {
    var a = dragStartLoc.x - position.x;
    var b = dragStartLoc.y - position.y;
    var d = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    var side = d/Math.sqrt(2);
    ctx.beginPath();
    if(a>0 || b>0){
        ctx.rect(dragStartLoc.x, dragStartLoc.y, 2*(-side), -side);
    }else{
        ctx.rect(dragStartLoc.x, dragStartLoc.y, 2*side, side);
    }
    
}
//For drawing Square.
function drawSquare(position) {
    var a = dragStartLoc.x - position.x;
    var b = dragStartLoc.y - position.y;
    var d = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    var side = d/Math.sqrt(2);
    ctx.beginPath();
    if(a>0 || b>0){
        ctx.rect(dragStartLoc.x, dragStartLoc.y, -side, -side);
    }else{
        ctx.rect(dragStartLoc.x, dragStartLoc.y, side, side);
    }
}

function dragStart(e) {
    dragging = true;
    dragStartLoc = getCoordinates(e);
    takeSnap();
}
function drag(e) {
    if (dragging === true) {
        restoreSnap();
        position = getCoordinates(e);
        draw(position, "square");
    }

}
function dragStop(e) {
    dragging = false;
    restoreSnap();
    position = getCoordinates(e);
    draw(position, "square");
}

//Generic Function
function draw(position) {
    var fillBox = document.getElementById("fillBox");
    var shape = document.querySelector('input[type="radio"][name="shape"]:checked').value;
    var lineCap = document.querySelector('input[type="radio"][name="lineCap"]:checked').value;
    ctx.lineCap = lineCap;
    if (shape === "brush pen") {
        drawFree(position);
    }
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
        ctx.stroke();
    }
    else {
        ctx.fill();
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
function changeBgColor() {
    ctx.save();
    ctx.fillStyle = document.getElementById("bgColor").value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(!(changeBgColor())){
        ctx.fillStyle = "white";   
    }else{
        ctx.fillStyle = fillColor.value;
    }
}

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    var lineWidth = document.getElementById("lineWidth");
    var fillColor = document.getElementById("fillColor");
    var strokeColor = document.getElementById("strokeColor");
    var bgColor = document.getElementById("bgColor");
    var clearCanvas = document.getElementById("clearCanvas");

    ctx.strokestyle = strokeColor.value;
    ctx.lineWidth = lineWidth.value;
    if(!(changeBgColor())){
        ctx.fillStyle = "white";   
    }else{
        ctx.fillStyle = fillColor.value;
    }
    canvas.addEventListener("mousedown", dragStart, false);
    canvas.addEventListener("mousemove", drag, false);
    canvas.addEventListener("mouseup", dragStop, false);
    lineWidth.addEventListener("input", changeLineWidth, false);
    fillColor.addEventListener("input", changeFillStyle, false);
    strokeColor.addEventListener("input", changeStrokeStyle, false);
    bgColor.addEventListener("input", changeBgColor, false);
    clearCanvas.addEventListener("click", clear, false);
}
window.addEventListener("load", init, false);