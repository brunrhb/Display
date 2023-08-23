let dialogues = [];
let dialogues1 = [];
let currentDialogueIndex = 0;
let currentDialogueIndex1 = 0;
let side = 'left';
let paragraphs = [];

function preload() {
    loadStrings('film.txt', fileLoaded);
    loadStrings('film1.txt', test);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  background(220);
    textSize(20);
    textAlign(CENTER, CENTER);
    noLoop();
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}

function draw() {
    background(220);
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].show();
    }
}

function mouseClicked() {
    if (side === 'left') {
        currentDialogueIndex++;
        if (currentDialogueIndex >= dialogues.length) {
            currentDialogueIndex = 0;
        }
        createNewParagraph(dialogues[currentDialogueIndex], side);
    } else {
        currentDialogueIndex1++;
        if (currentDialogueIndex1 >= dialogues1.length) {
            currentDialogueIndex1 = 0;
        }
        createNewParagraph(dialogues1[currentDialogueIndex1], side);
    }

    side = side === 'left' ? 'right' : 'left';
    redraw();
}

function createNewParagraph(dialogue, side) {
    const x = side === 'left' ? 50 : windowWidth / 2 + 50;
    const y = paragraphs.length * 100 + 50;

    let p = createDiv('');
    p.position(x, y);
    p.addClass('paragraph');
    let pText = createP(dialogue);
    pText.parent(p);

    paragraphs.push(p);
}

function fileLoaded(data) {
    let currentDialogue = '';
    let isDialogue = false;

    data.forEach(line => {
        if (line === line.toUpperCase() && line !== line.toLowerCase()) {
            if (isDialogue && currentDialogue.trim() !== '') {
                dialogues.push(currentDialogue.trim());
            }
            currentDialogue = '';
            isDialogue = true;
        } else if (isDialogue) {
            currentDialogue += ' ' + line.trim();
        }
    });

    if (isDialogue && currentDialogue.trim() !== '') {
        dialogues.push(currentDialogue.trim());
    }
}

function test(data) {

let pers = ["MUMBLE(VO)",
"MUMBLE(CONT’D)",
"KEENMALE",
"NEXTMALE",
"WISHFUL",
"NORMAJ.ANDWISHFUL",
"MUMBLE(VO)(CONT'D)",
"MUMBLE",
"WISHFUL(CONT'D)",
"LEADVOICE",
"CHORUS",
"CARUSO",
"VARIOUSPENGUINS",
"ELDER",
"ALLPENGUINS",
"EXCITEDFATHERS",
"PENGUINLOOKOUTS",
"MALEPENGUINS",
"MALEPENGUINS(CONT'D)",
"MALE#1",
"FEMALE#1",
"FEMALE#2",
"FEMALE#3",
"MALE#2",
"NORMAJ.",
"TEACHER(CONT'D)",
"MICK",
"TEACHER",
"ELLA",
"MICK",
"TITTERS",
"MRSASTRKHAN",
"MRSASTRAKHAN(CONT'D)",
"SKUA",
"SKUA#1"]

 const paragraphesArray =  data.map((line,index)=>{

if(line === ""){
if(pers.includes(data[index+1]?.replace(/\s/g, ''))){
        
for (let i = 0; ; i++) {
          if(data[index+(2+i)] === ""){
          return  [index+2 , (index + 2)+(i-1)]
             
          }
    }
         
      }

      }   
  
  }).filter(Boolean)
   
 const paragraphesBySentences = paragraphesArray.map((paragraphe)=>{
   let nbrLine = paragraphe[1] - paragraphe[0] === 0 ? 1 : paragraphe[1] - paragraphe[0] + 1
  return Array.from({length: nbrLine}, (_, i) => data[paragraphe[0] + i])
    
   
//    for (let i = 0; i <= nbrLine; i++) { 
     
//      return data[paragraphe[0] + i]
// }
   
  
})
 
 const paragraphesTotal = paragraphesBySentences.map((paragrahe)=>{
   return paragrahe.join(" ").replace('           '," ").replace('          '," ").replace('     '," ").replace('     '," ").replace('          '," ")
   

 })
    dialogues1 = paragraphesTotal
 
}          

dialogues1 = 

console.log(dialogues1)

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