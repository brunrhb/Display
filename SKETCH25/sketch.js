let cols, rows;
let word = "Z zz";
let gridSize = 50;
let xOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = ceil(width / gridSize);
  rows = ceil(height / gridSize);
  textSize(24);
  textAlign(CENTER, CENTER);
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
  background(220);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let xPos = x * gridSize;
      let yPos = y * gridSize;
      let noiseValue = noise(xOffset + x * 0.1, y * 0.1);
      let wordSize = map(sin(noiseValue * TWO_PI), -1, 1, 20, 40);
      
      textSize(wordSize);
      text(word, xPos, yPos);
    }
  }

  xOffset += 0.02;
}

window.onload = function() {
  // Créez le lien de retour
  var backLink = document.createElement("a"); 
  backLink.href = "../index.html"; 
  backLink.innerHTML = "Retour"; 
  backLink.style.position = "absolute";
  backLink.style.top = "10px";
  backLink.style.left = "10px";
  document.body.appendChild(backLink);
}