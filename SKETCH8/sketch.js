let mots = [];

fetch('Ipsum.txt')
  .then(response => response.text())
  .then(data => {
    mots = data.split(' ');
  });

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textAlign(CENTER);
}

function draw() {
  background(220);

  // Affiche chaque mot à la position de la souris
  for (let i = 0; i < mots.length; i++) {
    text(mots[i], mouseX, mouseY + i * 32);
  }
}

function mouseMoved() {
  // Supprime le premier mot de la liste
  mots.shift();
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