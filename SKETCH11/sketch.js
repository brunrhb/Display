let word = 'moi';
let wordSize = 24; // Taille du mot de base
let maxSize = 35; // Taille maximale lorsque survolé

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let spacing = 50; // Espace entre chaque mot

  for (let y = 0; y < windowHeight; y += spacing) {
    for (let x = 0; x < windowWidth; x += spacing) {
      let distance = dist(mouseX, mouseY, x, y);

      // Vérifie si le curseur est sur le mot
      if (distance < wordSize) {
        // Taille maximale lorsque survolé
        textSize(maxSize);
      } else {
        // Taille normale
        textSize(wordSize);
      }

      text(word, x, y);
    }
  }
}
