// Ajoute un gestionnaire d'événement sur chaque élément de la grille
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        window.location.href = `SKETCH${index + 1}/index.html`;
    });
});
