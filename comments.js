// Create web server
const express = require('express');
const app = express();
// Create web server
// We need to install express
// npm install express
// npm install body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const comments = [
    { id: 1, author: 'John', text: 'Hello World' },
    { id: 2, author: 'Peter', text: 'Goodbye World' },
];
// Get comments
app.get('/comments', (req, res) => {
    res.send(comments);
});
// Add comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,