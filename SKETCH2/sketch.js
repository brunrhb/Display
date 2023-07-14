let prevMouseX = 0;
let prevMouseY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  drawText();
  
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

function drawText() {
  if (mouseX === prevMouseX && mouseY === prevMouseY) {
    textSize(15);
    text('Oui', mouseX, mouseY);
  } else {
    textSize(randomGaussian(20));
    text('Non', mouseX + randomGaussian(-0,2, 0,2), mouseY + randomGaussian(-0,2, 0,2));
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
