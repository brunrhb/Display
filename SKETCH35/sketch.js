
let xoff1 = 0;
let xoff2 = 10000;

let xoff3 = 0;
let xoff4 = 10000;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
  background(51);

  let x = map(noise(xoff1), 0, 1, 0, width);
  let y = map(noise(xoff2), 0, 1, 0, height);
  
  let z = map(noise(xoff3), 0, 1, 0, width);
  let q = map(noise(xoff4), 0, 1, 0, height);

  xoff1 += 0.01;
  xoff2 += 0.01;
  
   xoff3 -= 0.1;
   xoff4 -= 0.1;
  
  fill(300)
  textSize(200)
  text('peut', x, y)
  text('être', z, q)
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
