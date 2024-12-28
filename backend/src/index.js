// Import the express library to create the server
const express = require('express');

// Import the database connection from db.js
const db = require('./db');

// Create an instance of the Express application
const app = express();

// Define the port number the server will listen on
const port = 3001;

// Define a route for the root URL that sends a "Hello World!" message
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});