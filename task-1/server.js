const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Serve static files from the 'task-1' directory
app.use(express.static(path.join(__dirname, '')));

app.post('/api/recipes', (req, res) => {
    // Simulate saving the recipe and returning a response
    const savedRecipe = req.body;
    console.log('Received recipe:', savedRecipe);
    res.json({ message: 'Recipe saved successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
