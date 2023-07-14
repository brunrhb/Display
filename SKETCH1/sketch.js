let txtContent = 'Non'; // Définition de la variable txtNom

function setup() {
  createCanvas(windowWidth, windowHeight); // Création du canvas
}

function draw() {
  background(220); // Définition de la couleur d'arrière-plan
  textSize(randomGaussian(3, 10)); // Définition de la taille du texte
  text(txtContent, mouseX+ randomGaussian(3, 10), mouseY+randomGaussian(3,10)); // Affichage du texte
}

window.onload = function() {
  // Vérifiez si l'utilisateur vient de la page d'accueil
  if (document.referrer.includes('index.html')) {
      // Si oui, affichez le lien de retour
      document.getElementById('back-link').style.display = 'block';
  }
}