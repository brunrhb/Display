let words; i = 0; wordArray = []; 
let size = 1; opacity = 200 ; acc = 1 ; TailleCoefficient = tC ; tc =1


function preload() {
  words = loadStrings('playtext.txt');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  let halfW = windowWidth / 2;
  let halfH = windowHeight / 2;
  textAlign(CENTER, CENTER);

  let allText = words.join(' ');
  wordArray = allText.split(' ');
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  frameRate(30*acc);
  MovingFront (wordArray)}


function MovingFront (Array){
  
  textSize(size)
  fill(0,opacity)
  y=height / 2
  
  tC = 1+ (1/(Array[i].length))*10 
  
  text(Array[i], width / 2, y);
  
  
  acc = acc*1.2
  y= y +10
  size = size +5*tC
  opacity = opacity -1.2
  
  
if (textWidth(wordArray[i]) > width - width/2 ){
      size = size +15*tC; y= y +20  } 

if (textWidth(wordArray[i]) > width ){
      size = size +45*tC; y= y +40  }  
  
if (textWidth(wordArray[i]) > width * 2){
      size = 1; acc = 1 ; opacity = 200; y = height / 2;  i = i+1 } }


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