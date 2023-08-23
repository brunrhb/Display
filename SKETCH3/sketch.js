let x = 0;
let LeCopy = 'Plus il y a de gruyère, plus il y a de trous. Plus il y a de trous, moins il y a de gruyère. Moins il y a de gruyère, moins il y a de trous. Moins il y a de trous, plus il y a de gruyère.';
let CopyMarge;
let quick = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  textSize(windowHeight / 10);
  CopyMarge = textWidth(LeCopy) + 15;

}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
  background(220);

  for (i = 0; i < windowWidth + CopyMarge ; i = i + CopyMarge ) {
    xPos = (x + i) % (windowWidth + CopyMarge)
    text(LeCopy, xPos, windowHeight / 2)
  }

  x = x - quick;

  if (x < -CopyMarge) {
    x = 0;
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