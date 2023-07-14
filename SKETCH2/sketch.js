let allOscs = [];
function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}
function draw() {
  background(255);
  noStroke();
  fill(0);
  text("click to create an oscillator", width/2, height/2);
  if (frameCount % 30 == 0) {
    for (let i = 0; i < allOscs.length; i++) {
      allOscs[i].pan(random(-1, 1));
    }
  }
}
function mousePressed() {
  let osc = new p5.Oscillator();
  osc.setType('square');
  osc.freq(random(100, 1000));
  osc.amp(0.05);
  osc.start();
  allOscs.push(osc);
}

window.onload = function() {
  // Vérifiez si l'utilisateur vient de la page d'accueil
  if (document.referrer.includes('index.html')) {
      // Si oui, affichez le lien de retour
      document.getElementById('back-link').style.display = 'block';
  }
}
