let cols, rows;
let word = "flOw";
let gridSize = 50;
let xOffset = 0;
let up; // Define the 'up' variable

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = ceil(width / gridSize);
  rows = ceil(height / gridSize);
  textSize(24);
  textAlign(CENTER, CENTER);
  
  text('brûle', windowWidth/2, windowHeight/2);
  textSize(200);
  
  up = 0; // Initialize the 'up' variable
}

function draw() {
  background(220);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let xPos = x * gridSize;
      let yPos = y * gridSize;
      let noiseValue = noise(xOffset + x * 0.1, y * 0.1);
      let wordSize = map(sin(noiseValue * TWO_PI), -1, 1, 20, 40);

      textSize(wordSize);
      let alpha = map(sin(noiseValue), -1, 1, 0, 100) ; // Define and calculate 'alpha'
      fill(16, 52, 166, alpha +10 );
      text(word, xPos, yPos);
      fill(44, 117, 255, alpha-50 )
      noStroke();
      ellipse(xPos, up, map(sin(noiseValue), -1, 1, 0, 250));

      up = yPos + 1;
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