let phrases = [];
let usedPhrases = [];
let displayText = "Dans ma valise il y a ?";
let objectsLoaded = false;

function preload() {
  loadObjectsFromFile("objets.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  background(220);
  let margin = 20;
  let lines = splitLines(displayText, width - margin * 2);
  let lineHeight = 30;
  let startY = (height - lines.length * lineHeight) / 2 + margin;

  for (let i = 0; i < lines.length; i++) {
    let y = startY + i * lineHeight;

    if (y + lineHeight > height - margin) {
      break; // Sortir de la boucle si on dépasse la limite inférieure de la fenêtre
    }

    text(lines[i], width / 2, y);
  }
}

function mouseClicked() {
  if (objectsLoaded) {
    if (phrases.length > 0) {
      let randomIndex = floor(random(phrases.length));
      let randomPhrase = phrases[randomIndex];
      usedPhrases.push(randomPhrase);
      phrases.splice(randomIndex, 1);
      displayText = "Dans ma valise il y a " + usedPhrases.join(", ") + ".";
    } else {
      displayText = "Dans ma valise il y a ?";
      phrases = usedPhrases.slice();
      usedPhrases = [];
    }
  }
}

function splitLines(str, maxWidth) {
  let words = str.split(" ");
  let lines = [];
  let currentLine = "";

  for (let i = 0; i < words.length; i++) {
    let testLine = currentLine + (currentLine !== "" ? " " : "") + words[i];
    let testWidth = textWidth(testLine);

    if (testWidth > maxWidth) {
      lines.push(currentLine);
      currentLine = words[i];
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine !== "") {
    lines.push(currentLine);
  }

  return lines;
}

function loadObjectsFromFile(filename) {
  loadStrings(filename, function (data) {
    phrases = data;
    objectsLoaded = true;
  });
}
