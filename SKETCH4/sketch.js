let LISTE = ['il', 'pleut', 'bergère',
             '.','.', '.', '.', '.','.','.', '.', '.', '.', '.' ];
let motsEnCours = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textAlign(CENTER);
}

function draw() {
  background(220);

   for (let i = 0; i < motsEnCours.length; i++) {
    let mot = motsEnCours[i];
    mot.y += mot.speed;
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
  let speed = random(2, 5);
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
