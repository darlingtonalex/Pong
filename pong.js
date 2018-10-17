// globals
var y = 255;
var y2 = 255;
var squareX = 500;
var squareY = 300;
var direction = 1;
var isGameOver = false;


function filler(r,g,b) {
  fill(r, g, b);
}

function setup() {
  createCanvas(1000, 600);
}

function createRect1(x, y, w, h) {  
  rect(x, y, w, h);
}

function createRect2(x, y2, w, h) {
  rect(x, y2, w, h);
}

function createSquare(x, y, w, h) {
  rect(x, y, w, h)
}

function moveSquare() {
  squareX += (5 * direction);
  squareY += (-2 * direction);
}

function keyPressed() {
  if (!isGameOver){
    if (keyCode === 87) {
      y -= 10;
    }
    if (keyCode === 83) {
      y += 10;
    }
    if (keyCode === UP_ARROW) {
      y2 -= 10;
    }
    if (keyCode === DOWN_ARROW) {
      y2 += 10;
    }
  }else {
    if (keyCode === UP_ARROW) {
      y2 -= 0;
    }
    if (keyCode === DOWN_ARROW) {
      y2 += 0;
    }
    isGameOver = false;
  }
}
 
function doReflectY() {
  if (y < 0){
    y += 10;
  } 
  if (y > 600 - 150) {
    y -= 10;
  }
  if (y2 < 0){
    y2 += 10;
  } 
  if (y2 > 600 - 150) {
    y2 -= 10;
  }
}

function doReflectSq() {
  if (squareX < 0) {
    direction = 1;
    squareX = 500;
    squareY = 300;  
  }
  if (squareX > 1000 - 15) {
    direction = -1;
    squareX = 500;
    squareY = 300; 
  }
  
}

function detectCollission() {
  doReflectY();
  doReflectSq();
}
function restartGame() {
  y = 255;
  y2 = 255;
  squareX = 500;
  squareY = 300;
  direction = 1;
  isGameOver = true;
}

function paddleTest() {
  // paddle 1
  if (squareX === 110 && (squareY >= y && squareY <= y + 150)) {
    direction = 1;
  }
  // paddle 1 rev
  if (squareX == 100 - 15 && (squareY >= y && squareY <= y + 150)) {
    direction = -1;
    restartGame();
  }
  // paddle 2
  if(squareX === 900 - 15 && (squareY >= y2 && squareY <= y2 + 150)) {
    direction = -1;
  }
  if (squareX === 900 + 10 && (squareY >= y2 && squareY <= y2 + 150)) {
    direction = 1;
    restartGame();
  }
}

function draw() {
  background(0, 0, 255);
  filler(255, 204, 0);
  keyPressed();
  detectCollission();
  paddleTest();
  moveSquare(squareX, squareY);
  createRect1(100,y,10,150);
  createRect2(900, y2, 10, 150);
  filler(0,255,0);
  createSquare(squareX, squareY, 15, 15);
}