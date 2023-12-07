const canvas = document.getElementById("canvas");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const sizeEl = document.getElementById("size");   
const colorEl = document.getElementById("color");   
const clearEl = document.getElementById("clear");   
const ctx = canvas.getContext("2d");
const halfCanvasHeight = canvas.height
const halfCanvasWidth = canvas.width


function mouseReset(){
  isPressed = false;

  x = undefined;
  y = undefined;
}

let size = 5;
let color = "black";
let isPressed = false;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  if(e.button === 0){

    isPressed = true;
    
    x = e.offsetX;
    y = e.offsetY;
    var endX = (canvas.width/canvas.offsetWidth) * x; 
    var endY = (canvas.height/canvas.offsetHeight) * y; 

    drawCircle(endX, endY);
    x = endX;
    y = endY;
  }
});
window.addEventListener("resize", function () {
  // Update canvas dimensions based on the new viewport height and width and it is set 80vh in css , it is being multiplied by 0.8
  canvas.width = window.innerWidth * 0.8;
  canvas.height = window.innerHeight * 0.8;
});

window.addEventListener("mouseup",mouseReset );


canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    var endX = (canvas.width/canvas.offsetWidth) * x2; 
    var endY = (canvas.height/canvas.offsetHeight) * y2; 


    drawCircle(endX, endY);
    drawLine(x, y, endX, endY);

    x = endX;
    y = endY;
  }
});

colorEl.addEventListener('change',(e)=>{
 
    color= e.target.value
})

increase.addEventListener("click", () => {
  size++;
  sizeEl.innerText = size;
});
decrease.addEventListener("click", () => {
  size--;

  sizeEl.innerText = size;
});



clearEl.addEventListener('click',clearPattern)

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size/4, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);

  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size/2 ;
  ctx.stroke();
}

function clearPattern(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

