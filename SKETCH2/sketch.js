let prevMouseX = 0;
let prevMouseY = 0;
let NonNon = 'Non'

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
    textSize((windowWidth/windowHeight)*50);
    text('Oui', mouseX, mouseY);
  } else {
    textSize((windowWidth/windowHeight)*60);
    text(NonNon, 
      mouseX + randomGaussian(-(textWidth(NonNon)/10)*2, -textWidth(NonNon)/10-textWidth(NonNon)/10), 
      mouseY + randomGaussian(-5, 5));
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
