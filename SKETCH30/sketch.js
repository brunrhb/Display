let cols, rows;
let word = "xx-xy";
let fontSize = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / fontSize);
  rows = floor(height / fontSize);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      let x = col * fontSize;
      let y = row * fontSize;
      
      let offsetX = sin(frameCount * 0.15 + col) * 50; // Sinusoidal offset
      let offsetY = noise(col * 0.1, row * 0.1, frameCount * 0.02) * 20; // Perlin noise offset
      
      let newSize = fontSize + offsetX + offsetY;
      textSize(newSize);
      
      fill(0);
      text(word, x + fontSize / 6, y + fontSize / 6);
    }
  }
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