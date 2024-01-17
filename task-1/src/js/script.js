// Recipe model
class Recipe {
    constructor(title, ingredients, instructions) {
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}

// Input validation
function validateInputs(title, ingredients, instructions) {
    // 1. I've improved validation feedback
    if (!title || !ingredients || !instructions) {
        alert('All fields are required.');
        return false;
    }
    return true;
}

// Handle form submission
const form = document.getElementById('recipe-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // 2. I've prevented the default form submission behavior

    // Get data
    const title = form.elements['title'].value;
    const ingredients = form.elements['ingredients'].value.split(',');
    const instructions = form.elements['instructions'].value;

    // Validate
    if (!validateInputs(title, ingredients, instructions)) {
        alert('Invalid recipe data');
        return;
    }

    // Create recipe object
    const recipe = new Recipe(title, ingredients, instructions);

    // POST to API
    try {
        // 3. Handling API endpoint validation
        const resp = await fetch('/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe),
        });

        // 4. Handling errors in the API call
        const data = await resp.json();
        console.log('Recipe saved!', data);

        // Clear form fields on successful submission
        form.reset();
    } catch (error) {
        console.error('Save failed!', error);
        alert('Failed to save recipe. Please try again.');
    }
});

