let mots = [
  'Argh', 'Aïe', 'Wouah', 'Aouh', 'Han', 'Aïl', 'Zut', 'Putain!', 'Aaaah', 'Humpf', 'Gnii', 'Rha',
   'Grrr', 'Hihi', 'Waouh', 'Pfui', 'Hum', 'Ouf',  'Pfouah', 'Pfuuu',
  'Gnagnagna', 'Aïgo', 'Hanhan', 'Pff', 'Berk', 'Pfut', 'Rrr', 'Ha', 'Houla', 'Hourra',
  'Pfff', 'Aho', 'Hihihi', 'Houlala', 'Tchou', 'Rofl', 'Brrr', 'Hahaha',
  'Fff', 'Boum', 'Aïe-mama', 'Humpff', 'Bim', 'Olala', 'Wouhou', 'Hip', 'Yip',
  'Pf',  'Haha', 'Snif-snif', 'Plop', 'Hmm-hmm', 'Hi', 
  'Hiiii', 'Hourraa', 'Tchac', 'Pfuii', 'Wou', 'Aïe-yah', 'Grrrr', 'Zzz',
 'Gnii-gnii', 'Yum', 'Pfiou',
  'Houhou', 'Hihihiii', 'Ouhla', 'Fffuu', 'Hihaaa', 'Aïl-aïl', , 'Waw',
  'Gniiii'
];
let motsEnCours = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textAlign(CENTER);
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
  background(220);
  
  // Parcours des mots en cours
  for (let i = 0; i < motsEnCours.length; i++) {
    let mot = motsEnCours[i];
    mot.y += mot.speed;
    text(mot.motActuel, mot.x, mot.y);
    
    // Arrête le mot lorsqu'il atteint le bas de l'écran
    if (mot.y > height) {
      motsEnCours.splice(i, 1); // Supprime le mot de la liste
      i--; // Décrémente l'indice pour compenser la suppression
    }
  }
}

function mouseClicked() {
  // Position du clic de souris
  let x = mouseX;
  let y = mouseY;
  
  // Choix aléatoire d'un mot
  let motActuel = random(mots);
  
  // Vitesse de chute aléatoire entre 2 et 5
  let speed = random(2, 5);
  
  // Ajoute le mot à la liste des mots en cours
  motsEnCours.push({ motActuel, x, y, speed });
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