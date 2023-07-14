
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textSize(randomGaussian(3, 10))  
  text (txtNom, mouseX+ randomGaussian(3, 10), mouseY+randomGaussian(3,10));
}
