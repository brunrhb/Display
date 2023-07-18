document.addEventListener("DOMContentLoaded", async function() {
    // Ajoute un gestionnaire d'événement sur chaque élément de la grille
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        window.location.href = `SKETCH${index + 1}/index.html`;
      });
  
      // Ajoute le numéro à la description
      const descriptionElement = item.querySelector('.description');
      descriptionElement.id = `description${index + 1}`;
      descriptionElement.innerHTML = `<span id="txtNumero">${index + 1}</span><br>${descriptionElement.innerHTML}`;
    });
  
    // Ajoute un gestionnaire d'événement pour faire défiler les frames de la vidéo lors du scroll
    const vidHead = document.getElementById('vidHead');
    const vidHeadContainer = document.getElementById('vidHeadContainer');
    if (vidHead && vidHeadContainer) {
      window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset / window.innerHeight;
        vidHead.currentTime = scrollPosition * vidHead.duration;
        const scale = 1.2 - scrollPosition * 0.4; // La taille de la vidéo passe de 120% à 80% lors du défilement
        vidHeadContainer.style.transform = `scale(${scale})`;
      });
    }
  
    // Fetch data from SKETCH1/ID.js, SKETCH2/ID.js, and SKETCH3/ID.js and insert into the HTML elements
    const sketches = [1, 2, 3];
    for (let i of sketches) {
      try {
        const response = await fetch(`SKETCH${i}/ID.js`);
        const data = await response.text();
        console.log(`Data for SKETCH${i}:`, data);
  
        window.eval(data);
  
        const txtNom = window[`txtNomSKETCH${i}`];
        const txtDescription = window[`txtDescriptionSKETCH${i}`];
  
        console.log(`txtNom for SKETCH${i}:`, txtNom);
        console.log(`txtDescription for SKETCH${i}:`, txtDescription);
  
        const descriptionElement = document.getElementById(`description${i}`);
        if (descriptionElement) {
          descriptionElement.innerHTML += `<br><span id="txtNom">${txtNom}</span><br><span id="txtDescription">${txtDescription}</span>`;
        }
      } catch (error) {
        console.error(`Error loading SKETCH${i}/ID.js: ${error}`);
      }
    }
  });
  