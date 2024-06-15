const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
// Redirect all routes to the 'index.html' file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/business-cards/todd', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'business-cards/todd.html'));
});

app.get('/staging/rollin-v2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/staging', 'rollin-v2/index.html'));
});

app.put('/subcribe', (req, res) => {
  return res.send('Put subscribe message');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
