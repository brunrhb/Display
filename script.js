// Ajoute un gestionnaire d'événement sur chaque élément de la grille
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        window.location.href = 'SKETCH1/index.html';
    });
});
