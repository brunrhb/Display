let jai = 'J\'ai des amis imaginaires,'
let qui = 'qui ont des amis imaginaires,'
let y = 100
let alpha = 200

function setup() {
      createCanvas(windowWidth, windowHeight);
      background(220);
      frameRate (0.75) }

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
MiseEnPage() 
text (jai, windowWidth/2, 70 )
RepEff()
  
    }


function MiseEnPage() {
  textAlign(CENTER, CENTER); 
  textSize(30);
  }
function RepEff() {
  fill (0, alpha)    
  text (qui, windowWidth/2, y )
      y = y +30
      alpha = alpha - 7
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
