let responses = ['un peu', 'beaucoup', 'passionnément', 'à la folie', 'pas du tout'];
let margueritePetales;
let indexPetal = 0;
let displayText2 = 'clic';
let displayText1 = 'Quantité d\'amour?';
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(windowHeight / 10);
  textAlign(CENTER, CENTER);
  resetSimulation();

  button = createButton('Recommencer');
  button.position(windowWidth - (button.width +50),  button.width );
  button.mousePressed(resetSimulation);
}

function draw() {
  background(220);
  text(displayText1, windowWidth / 2, windowHeight / 4);
  text(displayText2, windowWidth / 2, windowHeight / 2); 
}

function mouseClicked() {
  if (indexPetal < margueritePetales) {
    displayText2 = responses[indexPetal];
    indexPetal++;
  }
}

function resetSimulation() {
  // Réinitialiser la simulation
  margueritePetales = Math.floor(random(1, 6));
  indexPetal = 0;
  displayText2 = '';
}

