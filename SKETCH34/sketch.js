
let inc = 0.02;
let start = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
  background(51);

  stroke(255);
  noFill(0);

  let xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(255);
    let n = map(noise(xoff), 0, 1, -50, 50);
    let s = map(sin(xoff), -1, 1, 0, height);
    let y = s + n;

    vertex(x, y);

    xoff += inc;
    
    textSize(2000)
    //fill(300,random(0,1))
    text('go', x, y)
  }


  start += inc;

  //noLoop();
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