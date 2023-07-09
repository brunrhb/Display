let Phrases = ['Une','Dos','Tres','VivalAlgerie'];
let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(windowHeight / 10);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  text(Phrases[i], windowWidth/2, windowHeight/2);
}

function mouseClicked() {
  i = (i + 1) % Phrases.length;
}

window.onload = function() {
    // Vérifiez si l'utilisateur vient de la page d'accueil
    if (document.referrer.includes('index.html')) {
        // Si oui, affichez le lien de retour
        document.getElementById('back-link').style.display = 'block';
    }
}
