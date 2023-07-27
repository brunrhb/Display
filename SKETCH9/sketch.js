let fallingWords = []; 
let WrdSc1 = ['up']; WrdSc2 = ['wake']; WrdSc3 = ['up'];
let WrdSc4 = ['Wake', 'up','!']; WrdSc5 = ['up','!!'];
let WrdSc6 = ['Wake', '!!!!', '!!!!!!!'];
let WrdSc7 = ['up', '!!!!!!!!!', '!!!!!!!!!!!!!!!!!!'];
let WrdSc8 = ['WAKE', '!!!!!!!!!!!!!!!!!!', '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'];
let WrdSc9 = ['UP', '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'];
let WrdSc10 = ['UP'];


let sd = 1000 ; Scène = Sc

let exct1 = false; exct2 = false; exct3 = false; exct4 = false; 
let exct5 = false; exct6 = false; exct7 = false; exct8 = false;
let exct9 = false; exct10 = false; exct11 = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  frameRate(60);
}

function draw() {
  background(220);


  // index, delay, GoSc,....word____ frequency! ___speed___..mnSize/mxSize
            GoSc1(random(WrdSc1),0.5,  random (0.1,1), 9 ,13 ) ;
Wait ( 2,  10*sd,GoSc2 ,random(WrdSc2), 1 , random (0.2,1), 12,16 );
Wait ( 3, 20*sd,GoSc3 ,random(WrdSc3),1.5, random (0.3,1), 15,19 );
Wait ( 4, 30*sd,GoSc4 ,random(WrdSc4), 2 , random (0.4,1), 18,26 );
Wait ( 5, 40*sd,GoSc5 ,random(WrdSc5),2.5, random (0.5,1), 26,34 );
Wait ( 6, 50*sd,GoSc6 ,random(WrdSc6),3  , random (0.6,1), 34,42 );
Wait ( 7, 60*sd,GoSc7 ,random(WrdSc7),4   , random (0.7,1), 42,50 );
Wait ( 8, 70*sd,GoSc8 ,random(WrdSc8),5   , random (0.8,1), 50,62 );
Wait ( 9, 80*sd,GoSc9 ,random(WrdSc9), 6   , random (0.6,3),62,80 );

Wait ( 10, 90*sd,GoSc10 ,random(WrdSc10), 0.4  , random (0.6,1), random(100,150) );
  
fin (11, 95*sd);
  



}

function Wait(index, delay, GoSc, word, frequency, speed, mnSize, mxSize ) {
  if (!window['exct' + index]) {
    if (millis() >= delay) {
      GoSc (word, frequency, speed);
      window['exct' + index] = true;
    }
  } else {
    GoSc (word, frequency, speed, mnSize, mxSize);
  }
}
function GoSc1(word, frequency, speed, mnSize, mxSize) {
  if (frameCount % (60 / frequency) === 0) {
    let textSize = random (mnSize, mxSize)
    let fallingWord = {
      text: word,
      x: random(windowWidth),
      y: 0,
      speed: speed,
      size : textSize 
    };
    fallingWords.push(fallingWord);
  }

  for (let i = fallingWords.length - 1; i >= 0; i--) {
    let wordObj = fallingWords[i];
    textSize(wordObj.size); 
    text(wordObj.text, wordObj.x, wordObj.y);
    wordObj.y += wordObj.speed;

    // Réinitialiser le mot une fois qu'il atteint le bas de l'écran
    if (wordObj.y > windowHeight) {
      fallingWords.splice(i, 1);
    }
  }
}
function GoSc2(word, frequency, speed, mnSize, mxSize) {
  if (frameCount % (60 / frequency) === 0) {
    let textSize = random (mnSize, mxSize)
    let fallingWord = {
      text: word,
      x: random(windowWidth),
      y: 0,
      speed: speed,
      size : textSize 
    };
    fallingWords.push(fallingWord);
  }

  for (let i = fallingWords.length - 1; i >= 0; i--) {
    let wordObj = fallingWords[i];
    textSize(wordObj.size); 
    text(wordObj.text, wordObj.x, wordObj.y);
    wordObj.y += wordObj.speed;

    // Réinitialiser le mot une fois qu'il atteint le bas de l'écran
    if (wordObj.y > windowHeight) {
      fallingWords.splice(i, 1);
    }
  }
}
function GoSc3(word, frequency, speed, mnSize, mxSize) {
  if (frameCount % (60 / frequency) === 0) {
    let textSize = random (mnSize, mxSize)
    let fallingWord = {
      text: word,
      x: random(windowWidth),
      y: 0,
      speed: speed,
      size : textSize 
    };
    fallingWords.push(fallingWord);
  }

  for (let i = fallingWords.length - 1; i >= 0; i--) {
    let wordObj = fallingWords[i];
    textSize(wordObj.size); 
    text(wordObj.text, wordObj.x, wordObj.y);
    wordObj.y += wordObj.speed;

    // Réinitialiser le mot une fois qu'il atteint le bas de l'écran
    if (wordObj.y > windowHeight) {
      fallingWords.splice(i, 1);
    }
  }
}
function GoSc4(word, frequency, speed, mnSize, mxSize) {
  if (frameCount % (60 / frequency) === 0) {
    let textSize = random (mnSize, mxSize)
    let fallingWord = {
      text: word,
      x: random(windowWidth),
      y: 0,
      speed: speed,
      size : textSize 
    };
    fallingWords.push(fallingWord);
  }

  for (let i = fallingWords.length - 1; i >= 0; i--) {
    let wordObj = fallingWords[i];
    textSize(wordObj.size); 
    text(wordObj.text, wordObj.x, wordObj.y);
    wordObj.y += wordObj.speed;

    // Réinitialiser le mot une fois qu'il atteint le bas de l'écran
    if (wordObj.y > windowHeight) {
      fallingWords.splice(i, 1);
    }
  }
}
function GoSc5(word, frequency, speed, mnSize, mxSize) {
  if (frameCount % (60 / frequency) === 0) {
    let textSize = random (mnSize, mxSize)
    let fallingWord = {
      text: word,
      x: random(windowWidth),
      y: 0,
      speed: speed,
      size : textSize 
    };
    fallingWords.push(fallingWord);
  }

  for (let i = fallingWords.length - 1; i >= 0; i--) {
    let wordObj = fallingWords[i];
    textSize(wordObj.size); 
    text(wordObj.text, wordObj.x, wordObj.y);
    wordObj.y += wordObj.speed;

    // Réinitialiser le mot une fois qu'il atteint le bas de l'écran
    if (wordObj.y > windowHeight) {
      fallingWords.splice(i, 1);
    }
  }
}
function GoSc6(word, frequency, speed, mnSize, mxSize) {
  if (frameCount % (60 / frequency) === 0) {
    let textSize = random (mnSize, mxSize)
    let fallingWord = {
      text: word,
      x: random(windowWidth),
      y: 0,
      speed: speed,
      size : textSize 
    };
    fallingWords.push(fallingWord);
  }

  for (let i = fallingWords.length - 1; i >= 0; i--) {
    let wordObj = fallingWords[i];
    textSize(wordObj.size); 
    text(wordObj.text, wordObj.x, wordObj.y);
    wordObj.y += wordObj.speed;

    // Réinitialiser le mot une fois qu'il atteint le bas de l'écran
    if (wordObj.y > windowHeight) {
      fallingWords.splice(i, 1);
    }
  }
}
function GoSc7(word, frequency, speed, mnSize, mxSize) {
  if (frameCount % (60 / frequency) === 0) {
    let textSize = random (mnSize, mxSize)
    let fallingWord = {
      text: word,
      x: random(windowWidth),
      y: 0,
      speed: speed,
      size : textSize 
    };
    fallingWords.push(fallingWord);
  }

  for (let i = fallingWords.length - 1; i >= 0; i--) {
    let wordObj = fallingWords[i];
    textSize(wordObj.size); 
    text(wordObj.text, wordObj.x, wordObj.y);
    wordObj.y += wordObj.speed;

    // Réinitialiser le mot une fois qu'il atteint le bas de l'écran
    if (wordObj.y > windowHeight) {
      fallingWords.splice(i, 1);
    }
  }
}
function GoSc8(word, frequency, speed, mnSize, mxSize) {
  if (frameCount % (60 / frequency) === 0) {
    let textSize = random (mnSize, mxSize)
    let fallingWord = {
      text: word,
      x: random(windowWidth),
      y: 0,
      speed: speed,
      size : textSize 
    };
    fallingWords.push(fallingWord);
  }

  for (let i = fallingWords.length - 1; i >= 0; i--) {
    let wordObj = fallingWords[i];
    textSize(wordObj.size); 
    text(wordObj.text, wordObj.x, wordObj.y);
    wordObj.y += wordObj.speed;

    // Réinitialiser le mot une fois qu'il atteint le bas de l'écran
    if (wordObj.y > windowHeight) {
      fallingWords.splice(i, 1);
    }
  }
}
function GoSc9(word, frequency, speed, mnSize, mxSize) {
  if (frameCount % (60 / frequency) === 0) {
    let textSize = random (mnSize, mxSize)
    let fallingWord = {
      text: word,
      x: random(windowWidth),
      y: 0,
      speed: speed,
      size : textSize 
    };
    fallingWords.push(fallingWord);
  }

  for (let i = fallingWords.length - 1; i >= 0; i--) {
    let wordObj = fallingWords[i];
    textSize(wordObj.size); 
    text(wordObj.text, wordObj.x, wordObj.y);
    wordObj.y += wordObj.speed;

    // Réinitialiser le mot une fois qu'il atteint le bas de l'écran
    if (wordObj.y > windowHeight) {
      fallingWords.splice(i, 1);
    }
  }
}
function GoSc10(word, frequency, speed, Size) {
  if (frameCount % (60 / frequency) === 0) {
    let fallingWord = {
      text: word,
      x: random(windowWidth),
      y: 0,
      speed: speed,
      size : textSize 
    };
    fallingWords.push(fallingWord);
  }

  for (let i = fallingWords.length - 1; i >= 0; i--) {
    let wordObj = fallingWords[i];
    textSize(Size); 
    text(wordObj.text, wordObj.x, wordObj.y);
    wordObj.y += wordObj.speed;

    // Réinitialiser le mot une fois qu'il atteint le bas de l'écran
    if (wordObj.y > windowHeight) {
      fallingWords.splice(i, 1);
    }
  }
}

function fin (index, delay) {
  if (!window['exct' + index]) {
    if (millis() >= delay) {
      GoSc (word, frequency, speed);
      window['exct' + index] = true;
    }
    } else {
      background(0);}
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
  



