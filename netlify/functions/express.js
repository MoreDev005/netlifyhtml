// netlify/functions/express.js
const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const app = express();
const router = express.Router();
// Mengarahkan Express untuk melayani file statis di folder 'public'
app.use(express.static(path.join(__dirname, '../../public')));

// Menangani request untuk root ("/")
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Menangani request untuk file CSS
router.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/style.css'));
});
app.use("/.netlify/functions", router);
// Ekspor aplikasi Express sebagai fungsi serverless
module.exports.handler = serverless(app);
