document.addEventListener("DOMContentLoaded", function() {
    // Ajoute un gestionnaire d'événement sur chaque élément de la grille
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            window.location.href = `SKETCH${index + 1}/index.html`;
        });

        // Ajoute le numéro et la date de création à la description
        const descriptionElement = item.querySelector('.description');
        const creationDate = new Date().toLocaleDateString('fr-FR');
        descriptionElement.id = `description${index + 1}`;
        descriptionElement.innerHTML = `${index + 1}<br>${creationDate}<br>${descriptionElement.innerHTML}`;
    });

    // Ajoute un gestionnaire d'événement pour faire défiler les frames de la vidéo lors du scroll
    const vidHead = document.getElementById('vidHead');
    const vidHeadContainer = document.getElementById('vidHeadContainer');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset / window.innerHeight;
        vidHead.currentTime = scrollPosition * vidHead.duration;
        const scale = 1.2 - scrollPosition * 0.4; // La taille de la vidéo passe de 120% à 80% lors du défilement
        vidHeadContainer.style.transform = `scale(${scale})`;
    });




    