let x = 0;
let LeCopy = 'Mots';
let CopyMarge;
let quick = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  textSize(windowHeight / 10);
  CopyMarge = textWidth(LeCopy) + 15;

}

function draw() {
  background(220);

  for (i = 0; i < windowWidth + CopyMarge ; i = i + CopyMarge ) {
    xPos = (x + i) % (windowWidth + CopyMarge)
    text(LeCopy, xPos, windowHeight / 2)
  }

  x = x - quick;

  if (x < -CopyMarge) {
    x = 0;
  }

}