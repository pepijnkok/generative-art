/* 👇 Start writing your p5.js code here */

var hue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  
  noFill();
  background(30);
  hue = 0;
}

function draw() {
noStroke();
fill(220);

rect (800,180, 280,125)
rect (580,250, 500,125)

triangle (450,375, 600,375, 580, 250)
triangle (580,250, 800,180, 950, 250)

.style ('z-index', '-1')

  }

function mouseDragged() {
  if (hue > 360) {
    hue = 0;
  } else {
    hue += 10;
  }
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 200, 200);
  ellipse(mouseX, mouseY, 25, 25);
}

function keyPressed() {
  if (keyCode == 82) {
      hue = 0;
  }
}