const express = require('express');
const path = require('path');

var https = require('https');
var http = require('http');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Redirect all routes to the 'index.html' file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
http.createServer(app).listen(80);
