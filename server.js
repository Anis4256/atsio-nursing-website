const express = require('express');
const path = require('path');
const { spawn } = require('child_process');
const app = express();
const port = process.env.PORT || 3000;

// Start Flask server
const flaskProcess = spawn('python', ['flask_server.py'], {
  stdio: 'inherit',
  cwd: __dirname
});

flaskProcess.on('error', (error) => {
  console.error('Failed to start Flask server:', error);
});

// Serve static files from the 'dist' directory (or 'public' for development)
app.use(express.static(path.join(__dirname, 'dist')));

// For all routes, serve index.html to allow React Router to handle routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
  console.log(`Flask server should be running on port 5000`);
});
