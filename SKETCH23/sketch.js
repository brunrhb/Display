// size ratio of circles
var ratio = 3,
  // number of circles inside each circle
  division = 6; 
  haha = 0

function setup(haha) {
  
  
  
  createCanvas( windowWidth, windowHeight );
  noStroke();
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {

  background(0, 0, 0, 30);
  // move to the middle of the screen
  translate( width / 2, height / 2 );
  
  textSize(haha*0.1)
  haha = haha+1

  // draw the recursive circle
  drawCircle( height / 2, 5 );
}

/*
 * drawCircle
 * recursive function that draws a circle
 * then draws 'division' circles inside that circle
 *
 */
function drawCircle( radius, level ) {

  var tt = 126 * level / 4.0,
    i,
	mult;

  fill( tt );

  // draw the circle
  //ellipse( 0, 0, radius * 2, radius * 2 );

  text("partout",0, 0,radius * 2, radius * 2 );
  if ( level > 1 ) {
    level = level - 1;

    // draw the inner circles
    for ( i = 0; i < division; ++i ) {
      push();
      mult = (level % 2 == 1) ? -1 : 1;
      rotate( mult * frameCount / (20.0 * level) + TWO_PI / division * i );
      translate( radius - radius / ratio, 0 );
      drawCircle( radius / ratio, level );
      pop();
    }
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