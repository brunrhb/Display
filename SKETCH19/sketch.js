let instructions = [];
let bouts = [];
let y = 50;
let alpha = 200;
let size = 8;
let currentGroupIndex = 0;
let indexLimite = -1;
let transparence = []; // Tableau pour stocker les niveaux de transparence des éléments

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(4);
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

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

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
    bouts.push(groupeDeCinq);
  }

  return bouts;
}

function MiseEnPage() {
  textAlign(CENTER, CENTER);
}

function RepEff() {
  // Ajouter un fond de couleur pour effacer l'écran à chaque rafraîchissement
  background(255);

  textSize(size);
  size = size + 2;
  const groupeCourant = bouts[currentGroupIndex];
  
  // Vérifier si l'élément dépasse windowHeight
  if (y >= windowHeight) {
    // Réinitialiser la position verticale et mettre à jour l'index
    y = 50;
    alpha = 200;
    currentGroupIndex = (currentGroupIndex + 1) % bouts.length;
  } else {
    y = y + 30;
  }

  // Mise à jour de la transparence pour les éléments atteignant windowHeight
  for (let i = 0; i < transparence.length; i++) {
    if (transparence[i] > 0) {
      transparence[i] -= 7;
    }
  }

  // Dessiner le texte avec la transparence appropriée
  for (let i = 0; i < bouts.length; i++) {
    const groupe = bouts[i];
    const texteGroupe = groupe.join(" ");
    fill(0, transparence[i] || alpha); // Utiliser la transparence sauvegardée ou alpha initial
    text(texteGroupe, windowWidth / 2, y + (i * 30));
  }

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
