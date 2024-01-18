// Recipe API client
class RecipeApi {
    constructor() {
        this.cache = {};
        this.cacheTime = 5 * 60 * 1000; // Cache time set to 5 minutes
    }

    // Modified getRecentRecipes to utilize caching
    async getRecentRecipes() {
        // Check cache for recent recipes
        if (this.cache.recentRecipes && Date.now() - this.cache.recentRecipes.timestamp < this.cacheTime) {
            return this.cache.recentRecipes.data;
        }

        // Build URL with filters
        const url = new URL('/api/v2/recipes/latest', window.location.origin);
        url.searchParams.set('limit', '12');
        // Fetch
        const response = await fetch(url);
        const data = await response.json();

        // Store in cache
        this.cache.recentRecipes = {
            timestamp: Date.now(),
            data: data,
        };

        return data;
    }

    // Modified searchRecipes to use an absolute URL
    async searchRecipes(query) {
        // Build Search URL
        const url = new URL('/api/v2/recipes', window.location.origin);
        url.searchParams.set('search', query);
        // Fetch results
        const response = await fetch(url);
        return response.json();
    }

    async getRecipeDetails(id) {
        // Check cache for recipe details
        if (this.cache[id] && Date.now() - this.cache[id].timestamp < this.cacheTime) {
            return this.cache[id].data;
        }

        // Fetch from API
        const url = `/api/v2/recipes/${id}`;
        const response = await fetch(url);
        const json = await response.json();

        // Store in cache
        this.cache[id] = {
            timestamp: Date.now(),
            data: json,
        };

        return json;
    }
}

// UI Rendering
class RecipeRenderer {
    constructor() {
        this.recipesElement = document.getElementById("recipe-list");
        this.loaderElement = document.getElementById("loader");
        this.errorElement = document.getElementById("error");
    }

    // Modified showRecipes to dynamically render recipes
    showRecipes(recipes) {
        recipes.forEach(recipe => {
            const recipeHTML = `
                <div class="recipe">
                    <h2>${recipe.name}</h2>
                    <p>${recipe.description}</p>
                </div>
            `;
            this.recipesElement.insertAdjacentHTML('beforeend', recipeHTML);
        });

        // Hide loader and error elements when recipes are shown
        this.hideLoader();
        this.hideError();
    }

    showLoader() {
        // Show loader element while recipes are being fetched
        this.loaderElement.style.display = 'block';
    }

    hideLoader() {
        // Hide loader element
        this.loaderElement.style.display = 'none';
    }

    showError() {
        // Show error element if there's an issue with API request
        this.errorElement.style.display = 'block';
    }

    hideError() {
        // Hide error element
        this.errorElement.style.display = 'none';
    }
}

// Bring it together
const api = new RecipeApi(); // No base URL
const renderer = new RecipeRenderer();

// Modified loadRecipes to handle errors and show loader
async function loadRecipes() {
    try {
        renderer.showLoader();
        const recipes = await api.getRecentRecipes();
        renderer.showRecipes(recipes);
    } catch (err) {
        console.error('Error loading recipes:', err);
        renderer.showError();
    }
}

loadRecipes();
