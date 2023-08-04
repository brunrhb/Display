let word = 'Océ';
let fontSize = 15; // Taille de police de départ
let spacing = 60; // Espace entre chaque mot

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Arial');
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  for (let y = 0; y < windowHeight; y += spacing) {
    for (let x = 0; x < windowWidth; x += spacing) {
      let distance = dist(x, y, mouseX, mouseY); // Calculer la distance entre le curseur et le mot
      let newSize = map(distance, 0, 75, fontSize, fontSize * 1.5); 
      textSize(newSize);
      text(word, x, y);
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

