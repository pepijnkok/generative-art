let img;
let cnv;
let slider;

function preload(){
  img = loadImage('images/gogh.jpeg');
}

//only runs once
function setup() {
createCanvas(750, 500);

//making a slider
sliderPoint = createSlider(0, 20, 0);
sliderPoint.position(800, 585);
sliderPoint.style('width', '200px');

sliderPoint.style ('z-index: +10')

sliderBackground = createSlider(0, 255, 255);
sliderBackground.position(450, 585);
sliderBackground.style('width', '200px');

sliderBackground.style ('z-index: +10')
}

// loops endless
function draw() {

  let valPoint = sliderPoint.value();
  let valBackground = sliderBackground.value();
  background(valBackground);

  // acces pixel information of image
  for(let col = 0; col< img.width; col+=10){
    for(let row = 0; row <img.height; row+=10){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos,yPos);

      strokeWeight(valPoint);
      stroke(color(c));
      point(xPos,yPos); 
    }
  }
}

function keyPressed(){
  if (key === 's'){
    saveCanvas("art.jpg");
  }
}
