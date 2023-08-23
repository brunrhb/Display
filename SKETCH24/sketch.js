let instructions = [];
let bouts = [];
let y = 50;
let alpha = 200;
let size = 8;
let currentGroupIndex = 0;
let indexLimite = -1;
let fadeIn = false;
let fadeAmount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(0.8);
  textSize(30);

  fetch('Instructions pour monter un escalier.txt')
    .then(response => response.text())
    .then(data => {
      instructions = decouperEnLignes(data);
      bouts = CqBouts(instructions);
    });
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
  MiseEnPage();
  RepEff();
}

function decouperEnLignes(texte) {
  return texte.trim().split('\n');
}

function CqBouts(lignes) {
  const bouts = [];

  for (let i = 0; i < lignes.length; i += 1) {
    const groupeDeLignes = [lignes[i]];
    bouts.push(groupeDeLignes);
  }

  return bouts;
}

function MiseEnPage() {
  textAlign(CENTER, CENTER);
}

function RepEff() {
  textSize(size);
  size = size + 3;

  const groupeCourant = bouts[currentGroupIndex];
  
  if (fadeIn) {
    fill(0, 0, 0, fadeAmount);
    fadeAmount += 5;
  } else {
    fill(0, 0, 0, alpha);
  }
  
  text(groupeCourant.join(" "), windowWidth / 2, y);
  
  if (fadeAmount >= alpha) {
    fadeIn = false;
    fadeAmount = 0;
    currentGroupIndex = (currentGroupIndex + 1) % bouts.length;
  }

  y = y + 30;

  if (y >= windowHeight - 250) {
    indexLimite = currentGroupIndex;
    y = 50;
    size = 10;
    fadeIn = true;
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