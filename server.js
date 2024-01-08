const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 443;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Redirect all routes to the 'index.html' file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
