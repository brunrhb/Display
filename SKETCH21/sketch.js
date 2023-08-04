let instructions = [];
let bouts = [];
let y = 50;
let alpha = 200;
let size = 40;
let rotationAngle = 0;
let currentGroupIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(36);
  textSize(100);

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

// Fonction pour former des groupes de cinq mots
function CqBouts(mots) {
  const bouts = [];

  for (let i = 0; i < mots.length; i += 5) {
    const groupeDeCinq = mots.slice(i, i + 5);
    bouts.push({ mots: groupeDeCinq });
  }

  return bouts;
}

function MiseEnPage() {
  textAlign(CENTER, CENTER);
}

function RepEff() {
  background(255); // Ajouter un fond de couleur pour effacer l'écran à chaque rafraîchissement

  textSize(size);
  size = size + 2;

  const groupeCourant = bouts[currentGroupIndex];
  fill(0, alpha); // Transparence décroissante pour l'effet de fondu
  translate(windowWidth / 2, y); // Centre du texte
  rotate(radians(rotationAngle)); // Rotation du texte
  text(groupeCourant.mots.join(" "), 0, 0);

  alpha = alpha - 0.5; // Vitesse de fondu
  rotationAngle = rotationAngle + 0.5; // Vitesse de rotation

  if (alpha <= 0) {
    y = y + 30; // Vitesse de défilement
    alpha = 200; // Réinitialiser l'alpha pour le prochain groupe
    rotationAngle = 0; // Réinitialiser l'angle de rotation pour le prochain groupe
    currentGroupIndex = (currentGroupIndex + 1) % bouts.length;
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

