// server.js
const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Route pour sauvegarder une nouvelle date de création
app.post('/save-date', (req, res) => {
    const { index } = req.body;
    const creationDates = JSON.parse(fs.readFileSync('creationDates.json', 'utf-8'));
    const creationDate = new Date().toLocaleDateString('fr-FR', {day: '2-digit', month: '2-digit', year: '2-digit'});
    creationDates[`description${index}`] = creationDate;
    fs.writeFileSync('creationDates.json', JSON.stringify(creationDates));
    res.send({ message: 'Date de création sauvegardée.' });
});

// Route pour récupérer toutes les dates de création
app.get('/get-dates', (req, res) => {
    const creationDates = JSON.parse(fs.readFileSync('creationDates.json', 'utf-8'));
    res.send(creationDates);
});

app.listen(3000, () => console.log('Server running on port 3000'));
