const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
const { dbconnection } = require("./db/DbConnection.js")
dbconnection();
// Simple GET route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
