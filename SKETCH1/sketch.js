function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textSize(randomGaussian(3, 10))  
  text (txtNom, mouseX+ randomGaussian(3, 10), mouseY+randomGaussian(3,10));
}

window.onload = function() {
  // Vérifiez si l'utilisateur vient de la page d'accueil
  if (document.referrer.includes('index.html')) {
      // Si oui, affichez le lien de retour
      var backLink = document.createElement("a"); 
      backLink.href = "index.html"; 
      backLink.innerHTML = "Retour"; 
      document.body.appendChild(backLink);
  }
}
