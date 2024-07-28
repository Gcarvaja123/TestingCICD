const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Ruta de ejemplo
app.get('/asd', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

// Exportar la aplicación para que pueda ser utilizada en pruebas
module.exports = app;