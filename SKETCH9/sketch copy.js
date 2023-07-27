let txtContent = 'Non'

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  
textSize(randomGaussian(3, 10))  
text ('Non', mouseX+ randomGaussian(3, 10), mouseY+randomGaussian(3,10));

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



