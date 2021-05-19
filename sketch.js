let img;
let cnv;
let slider;

function preload(){
  img = loadImage('images/gogh.jpeg');
}

//Setup only runs once
function setup() {
createCanvas(750, 500);

//Making a slider for the points of the image
sliderPoint = createSlider(0, 20, 0);
sliderPoint.position(800, 585);

sliderPoint.style('width', '200px');
sliderPoint.style ('z-index: +10')

//Making a slider for the background of the image
sliderBackground = createSlider(0, 255, 255);
sliderBackground.position(450, 585);

sliderBackground.style('width', '200px');
sliderBackground.style ('z-index: +10')
}

//Draw loops endlessly
function draw() {

  //Assigning the sliders 
  let valPoint = sliderPoint.value();
  let valBackground = sliderBackground.value();
  background(valBackground);

  //Acces pixel information of the image
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

//If you press 'S' you will save the image as a .jpg
function keyPressed(){
  if (key === 's'){
    saveCanvas("art.jpg");
  }
}
