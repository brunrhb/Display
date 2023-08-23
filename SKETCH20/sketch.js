let instructions = [];
let bouts = [];
let y = 50;
let alpha = 200;
let size = 8;
let currentGroupIndex = 0;
let indexLimite = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(0.8);
  textSize(30);


  // Charger les instructions depuis le fichier texte et découper en lignes
  fetch('Instructions pour monter un escalier.txt')
    .then(response => response.text())
    .then(data => {
      instructions = decouperEnLignes(data);
      bouts = CqBouts(instructions);
    })
    .catch(error => {
      console.error('Une erreur s\'est produite lors du chargement du fichier :', error);
    });
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
  MiseEnPage();
  RepEff();
}

// Fonction pour découper le texte en lignes
function decouperEnLignes(texte) {
  return texte.trim().split('\n');
}

// Fonction pour former des groupes de lignes
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
  background(255);

  textSize(size);
  size = size + 3;
  fill(0, alpha);

  const groupeCourant = bouts[currentGroupIndex];
  text(groupeCourant.join(" "), windowWidth / 2, y);
  y = y + 30;

  if (y >= windowHeight - 250) {
    indexLimite = currentGroupIndex;
    y = 50;
    alpha = 200;
    size = 10;
    currentGroupIndex = (currentGroupIndex + 1) % bouts.length;

    if (currentGroupIndex === indexLimite) {
      currentGroupIndex = 0;
    }
  } else {
    currentGroupIndex++;
  }

  alpha = alpha;
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

