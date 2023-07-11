// Ajoute un gestionnaire d'événement sur chaque élément de la grille
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        window.location.href = `SKETCH${index + 1}/index.html`;
    });
});

// Ajoute un gestionnaire d'événement pour faire défiler les frames de la vidéo lors du scroll
const vidHead = document.getElementById('vidHead');
window.addEventListener('scroll', () => {
    vidHead.currentTime = window.pageYOffset / window.innerHeight * vidHead.duration;
});
