const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Angular app's dist directory under "/angular-o1js"
app.use('/angular-o1js', express.static(path.join(__dirname, 'dist/angular-o1js/browser')));

// Catch all other routes and serve index.html for Angular's client-side routing
app.get('/angular-o1js/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/angular-o1js/browser', 'index.html'));
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
