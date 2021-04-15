/* 👇 Start writing your p5.js code here */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for(let i=50; i <mouseX; i+=50) {
    for(let j=50; j <mouseY; j+=50) {
      let r = random(2);
      noFill()
      stroke(mouseX-i,i,mouseY-j)
      strokeWeight(r * 2)
      rect(i,j, 50,50);
    }
  }

}

for (let i = 0; i < 100; i++) {
  let r = random(-50, 50);
  line(50, i, 50 + r, i);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}