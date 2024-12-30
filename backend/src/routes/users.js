const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Create a new user
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'Username or email already exists' });
        } else{ 
            res.status(500).json({ error: 'Failed to create user' });
        }
    }
});
  

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});


module.exports = router;