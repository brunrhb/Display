let txtNom = 'Non'; // Définition de la variable txtNom

function setup() {
  createCanvas(windowWidth, windowHeight); // Création du canvas
}

function draw() {
  background(220); // Définition de la couleur d'arrière-plan
  textSize(randomGaussian(3, 10)); // Définition de la taille du texte
  text(txtNom, mouseX+ randomGaussian(3, 10), mouseY+randomGaussian(3,10)); // Affichage du texte
}
