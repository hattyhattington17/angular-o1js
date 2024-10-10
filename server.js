const express = require('express');
const path = require('path');
const app = express();
// Add the necessary headers for SharedArrayBuffer
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});
// Serve static files from the Angular app's dist directory under "/angular-o1js"
app.use('/angular-o1js', express.static(path.join(__dirname, 'dist/angular-o1js')));

// Catch all other routes and serve index.html for Angular's client-side routing
app.get('/angular-o1js/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/angular-o1js', 'index.html'));
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
