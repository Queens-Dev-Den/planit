const express = require('express');
const db = require('../db');
const router = express.Router();

// Define a router to add a new user
router.post('/users', (req, res) => {
    const { username, email, password } = req.body;
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, username, email });
    });
})

module.exports = router; // Export the router object