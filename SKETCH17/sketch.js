let jai = 'Le monde des';
let qui = 'OMBRES';
let quoi = 'OMBRES';
let size = 30;

let repEff1Size = size;
let repEff1Alpha = 200;

let repEff2Size = size;
let repEff2Alpha = 200;

let repEff3Size = size;
let repEff3Alpha = 200;

let repEff4Size = size;
let repEff4Alpha = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  frameRate(6);
  textSize(size);
}

function draw() {
  MiseEnPage();
  text(jai, windowWidth / 2, windowHeight / 2 - 15);
   RepEff1();
  RepEff2();
  RepEff3();
  setTimeout(RepEff4, 20*1000)
}

function MiseEnPage() {
  textAlign(CENTER, CENTER);
}

function RepEff1() {
  textSize(repEff1Size);
  repEff1Size += 5;
  fill(0, repEff1Alpha);
  text(qui, windowWidth / 2, windowHeight / 2 + 15);
  repEff1Alpha = 1.2;
}

function RepEff2() {
  textSize(repEff2Size);
  repEff2Size += 10;
  fill(0, repEff2Alpha);
  text(qui, windowWidth / 2, windowHeight / 2 + 15);
  repEff2Alpha = 0.6;

}

function RepEff3() {
  textSize(repEff3Size);
  repEff3Size += 0.05;
  fill(0, repEff3Alpha);
  text(quoi, windowWidth / 2, windowHeight / 2 + 15);
  repEff3Alpha =  50;
}

function RepEff4() {
  textSize(repEff4Size);
  repEff4Size += 5;
  fill(0, repEff4Alpha);
  text(quoi, windowWidth / 2, windowHeight / 2 + 15);
  repEff4Alpha =  5;
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
