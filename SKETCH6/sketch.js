let LISTE = [];
let motsEnCours = [];

fetch('Ipsum.txt')
  .then(response => response.text())
  .then(data => {
    LISTE = data.split(' ');
  });

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
  background(220);

  for (let i = 0; i < motsEnCours.length; i++) {
    let mot = motsEnCours[i];
    mot.y += mot.Speed;
    textSize(mot.size); // Utiliser la taille de texte spécifique au mot
    text(mot.motActuel, mot.x, mot.y);

    if (mot.y > height) {
      motsEnCours.splice(i, 1);
      i--;
    }
  }
}

function mouseMoved() {
  let x = mouseX;
  let y = mouseY;
  let motActuel = random(LISTE);
  let Speed = random(2, 5);
  let size = mouseY / 20 + 30; // Déterminer la taille du texte en fonction de la position actuelle de la souris
  motsEnCours.push({ motActuel, x, y, Speed, size });
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