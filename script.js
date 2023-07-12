// Ajoute un gestionnaire d'événement sur chaque élément de la grille
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        window.location.href = `SKETCH${index + 1}/index.html`;
    });
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

// Ajoute un gestionnaire d'événement pour ajuster la taille du footer lors du scroll
const footer = document.getElementById('footer');
const footerContainer = document.getElementById('footerContainer');
const footerImg = document.getElementById('footerImg');
window.addEventListener('scroll', () => {
    const scrollPosition = (window.pageYOffset - window.innerHeight) / (document.body.scrollHeight - 2 * window.innerHeight);
    if (scrollPosition > 0) {
        const opacity = scrollPosition * 0.3; // Apparition progressive de 30% de noir
        footerContainer.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        const translateY = -150 * scrollPosition; // L'image monte de 150px lors du défilement
        footerImg.style.transform = `translateY(${translateY}px)`;
    }
});
