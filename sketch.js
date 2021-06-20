let img;
let cnv;
let slider;
let size = 5;

function preload(){
  
  //Load images
  let gogh0 = loadImage('images/gogh1.jpeg');
  let gogh1 = loadImage('images/gogh1.jpeg');
  let gogh2 = loadImage('images/gogh2.jpeg');
  let gogh3 = loadImage('images/gogh3.jpeg');
  let gogh4 = loadImage('images/gogh4.jpeg');
  let gogh5 = loadImage('images/gogh5.jpeg');
  let gogh6 = loadImage('images/gogh6.jpeg');
  picture = [gogh0, gogh1, gogh2, gogh3,gogh4, gogh5, gogh6];
  
  //Pick random number from array
  let number = Math.floor(Math.random() * (picture.length - 1) + 1);
  
  //Random image
  img = picture[number];
}

//Setup only runs once
function setup() {
createCanvas(700, 420);

}

//Draw loops endlessly
function draw() {

  //Acces pixel information of the image
  for(let col = 0; col< img.width; col+=10){
    for(let row = 0; row <img.height; row+=10){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos,yPos);

      strokeWeight(size);
      stroke(color(c));
      point(xPos,yPos); 
    }
  }
}

//Mouse scroll controls the strokeweight and background
function mouseWheel(event) {
 if(size * event.deltaY <= 0) {
  
   size = 5;
 } 
 
 else {
   size = size + 1;
   image(img, width, height);
 }
 strokeWeight(size)
 background(size);
}

//If you press 'S' you will save the image as a .jpg
function keyPressed(){
  if (key === 's'){
    saveCanvas("art.jpg");
  }
}
