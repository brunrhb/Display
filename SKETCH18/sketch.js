let texte = "j'arrive";
let x = [];
let y = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(30);
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
  background(220);
  fill(0);

  for (let i = 0; i < x.length; i++) {
    text(texte, x[i], y[i]);
  }
}

function mouseMoved() {
  x.push(mouseX);
  y.push(mouseY);

  if (x.length > 25) {
    x.shift();
    y.shift();
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
