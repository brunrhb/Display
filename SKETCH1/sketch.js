let Phrases = ['Une','Dos','Tres','VivalAlgerie'];
let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(windowHeight / 10);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  text(Phrases[i], windowWidth/2, windowHeight/2);
}

function mouseClicked() {
  i = (i + 1) % Phrases.length;
}
