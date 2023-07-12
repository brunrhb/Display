

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  
textSize(randomGaussian(3, 10))  
text ('Non', mouseX+ randomGaussian(3, 10), mouseY+randomGaussian(3,10));

}