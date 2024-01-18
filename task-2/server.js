const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Serve static files from the 'task-2' directory
app.use(express.static(path.join(__dirname, '')));

// Remove explicit handling of the root path

// API routes
app.get('/api/v2/recipes/latest', (req, res) => {
	// Implement logic to provide recent recipes
	res.json([{ name: 'Recipe 1', description: 'Description 1' }, /*...*/]);
});

app.get('/api/v2/recipes/:id', (req, res) => {
	// Implement logic to provide recipe details
	const recipeId = req.params.id;
	res.json({ name: `Recipe ${recipeId}`, description: `Description ${recipeId}` });
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
