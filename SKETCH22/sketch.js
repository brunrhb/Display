
let tx= 'pas\nça' ; i=0 ; 
let opacity = 300 ; sombre = 220 ; distance = 0
//let coefMas = 1


function setup() {
  createCanvas(windowWidth, windowHeight);   
  textAlign (CENTER,CENTER)  
  x = windowWidth/2 ; y = windowHeight/2
  
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
  frameRate (300);
  background(sombre);
  
  textSize(i)
  textLeading(distance);
  fill(0,opacity)
  
  text (tx , x, y)
  
  i= i+1 
  x= x-0.2 
  y= y -0.6 
  distance = distance +0.7 
  
  opacity = opacity -0.05
  sombre= sombre -0.05
  
 // console.log(mouseX,mouseY)
  
  if (textWidth(tx) > (windowWidth/2) ){
  i= i+5 
  x= x-1.2 
  y= y -1.07
  distance = distance +3 
  
  opacity = opacity -0.1
  sombre= sombre -0.1
    }
  
  if (textWidth(tx) > windowWidth*1.5 ){
  i= i +10 
  x= x-1.2 
  y= y -3
  distance = distance +5 
  
  opacity = opacity -0.2
  sombre= sombre -0.2
    }
 
  
    if (sombre < 20 ){
    i=0 ; 
    x = windowWidth/2 
    y = windowHeight/2
    distance=0
    sombre = 220 
    opacity =100
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