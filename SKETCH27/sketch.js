let word = "et si";
let gridSize = 150; // Taille de la grille
let yOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(gridSize);
  textAlign(CENTER, CENTER);
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
  background(255);
  
  for (let y = 0; y < height; y += gridSize) {
    for (let x = 0; x < width; x += gridSize) {
      let wave = sin(frameCount * 0.01 + x * 50 + yOffset) * 100;
      textSize(gridSize + wave);
      text(word, x, y);
    }
  }
  
  yOffset += 0.05;
  
  // Dessiner une forme personnalisée avec vertex()
  translate(width / 2, height / 2);
  noFill();
  stroke(0);
  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += 0.1) {
    let radius = 100 + noise(angle * 2 + frameCount * 0.1) * 50;
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
   // vertex(x, y);
  }
  endShape(CLOSE);
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