// Import the mysql2 library to interact with MySQL databases
const mysql = require('mysql2');

// Load environment variables from a .env file into process.env
require('dotenv').config();

// Create a connection to the MySQL database using credentials from environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    // Log an error message if the connection fails
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  // Log a success message if the connection is established
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Export the connection object for use in other parts of the application
module.exports = connection;