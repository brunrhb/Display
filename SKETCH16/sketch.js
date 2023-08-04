let instructions = [];
let bouts = [];
let qui = 'qui ont des amis imaginaires,';
let y = 50;
let alpha = 200;
let size = 8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(0.75);
  textSize(30);

  // Charger les instructions depuis le fichier texte et découper en mots
  fetch('Instructions pour monter un escalier.txt')
    .then(response => response.text())
    .then(data => {
      instructions = decouperEnMots(data);
      bouts = CqBouts(instructions);
    })
    .catch(error => {
      console.error('Une erreur s\'est produite lors du chargement du fichier :', error);
    });
}

function draw() {
  MiseEnPage();
  RepEff();
}

// Fonction pour découper le texte en mots
function decouperEnMots(texte) {
  return texte.trim().split(/\s+/);
}

// Fonction pour former des groupes de quatre mots
function CqBouts(mots) {
  const bouts = [];

  for (let i = 0; i < mots.length; i += 4) {
    const CqBouts = mots.slice(i, i + 4);
    bouts.push(CqBouts.join(" "));
  }

  return bouts;
}

function MiseEnPage() {
  textAlign(CENTER, CENTER);
}

function RepEff() {
  textSize(size);
  size = size + 2;
  fill(0, alpha);
  text(CqBouts, windowWidth / 2, y);
  y = y + 30;
  alpha = alpha - 7;
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
