document.addEventListener("DOMContentLoaded", function() {
    // Récupère les dates de création du serveur
    fetch('http://www.display.brunr.com/get-dates')
        .then(response => response.json())
        .then(creationDates => {
            // Ajoute un gestionnaire d'événement sur chaque élément de la grille
            const gridItems = document.querySelectorAll('.grid-item');
            gridItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    window.location.href = `SKETCH${index + 1}/index.html`;
                });

                // Ajoute le numéro et la date de création à la description
                const descriptionElement = item.querySelector('.description');
                const creationDate = creationDates[`description${index + 1}`];
                if (!creationDate) {
                    fetch('http://www.display.brunr.com/save-date', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ index: index + 1 }),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.message);
                    });
                }
                descriptionElement.id = `description${index + 1}`;
                descriptionElement.innerHTML = `<span id=\"txtNumero\">${index + 1}</span><br><span id=\"txtDate\">${creationDate}</span><br>${descriptionElement.innerHTML}`;
            });
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

    // Fetch data from SKETCH1/ID.js and SKETCH2/ID.js and insert into the HTML elements
    fetch('SKETCH1/ID.js')
    .then(response => response.text())
    .then(data => {
        eval(data);
        const description1 = document.getElementById('description1');
        if (description1) {
            description1.innerHTML += `<br><span id=\"txtNom\">${txtNomSKETCH1}</span><br><span id=\"txtDescription\">${txtDescriptionSKETCH1}</span>`;
        }
    });

    fetch('SKETCH2/ID.js')
    .then(response => response.text())
    .then(data => {
        eval(data);
        const description2 = document.getElementById('description2');
        if (description2) {
            description2.innerHTML += `<br><span id=\"txtNom\">${txtNomSKETCH2}</span><br><span id=\"txtDescription\">${txtDescriptionSKETCH2}</span>`;
        }
    });
});
