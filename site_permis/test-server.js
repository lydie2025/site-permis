const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configuration des types MIME
app.use((req, res, next) => {
  if (req.url.endsWith('.js')) {
    res.setHeader('Content-Type', 'application/javascript');
  } else if (req.url.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css');
  } else if (req.url.endsWith('.jpg') || req.url.endsWith('.jpeg')) {
    res.setHeader('Content-Type', 'image/jpeg');
  }
  next();
});

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'dist')));

// Route pour toutes les pages SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Serveur de test démarré sur http://localhost:${port}`);
  console.log('Ce serveur simule la production avec les bons types MIME');
});
