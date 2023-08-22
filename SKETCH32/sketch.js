tx= 'ye'
i=0
let opacity = 300

function setup() {
  createCanvas(windowWidth, windowHeight);   
  textAlign (CENTER,CENTER)  
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
  background(220);
  frameRate (30);
  textSize(i)
 
  fill(0,opacity)
  text (tx , windowWidth/2 , windowHeight/2)
  i=i+100
  opacity = opacity / 1.005
 
  
  if (textWidth(tx) > windowWidth*5 ){
    i=0
    opacity = 300
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