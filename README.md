# Recipe Management System

This project consists of two parts, Task-1 and Task-2, which are designed to demonstrate the development and optimization of a Recipe Management System.

## Task-1: Recipe Submission Form

### Overview
Task-1 involves the creation of a Recipe Submission Form that allows users to submit new recipes. The form includes input validation, prevents default form submission behavior, handles API endpoint validation, and provides feedback to the user.

### Key Modifications
1. Improved validation feedback for required fields.
2. Prevention of default form submission behavior.
3. Handling API endpoint validation.
4. Handling errors in the API call.
5. Clearing form fields on successful submission.

### File Structure
- `task-1/`
  - `index.html`: HTML file containing the recipe submission form.
  - `src/js/script.js`: JavaScript file with the recipe model, input validation, and form submission handling.
  - `src/css/styles.css`: CSS file for styling the form.
  - `server.js`: Node.js server file to run the local server. Run with `node server.js`.

## Task-2: Recipe Listing Page

### Overview
Task-2 involves the development of a Recipe Listing Page that fetches and displays recipes from an API. The code includes improvements in terms of caching, absolute URL usage, and dynamic rendering of recipes.

### Key Modifications
1. Utilizing caching for recent recipes.
2. Using absolute URLs in API requests.
3. Dynamically rendering recipes on the page.
4. Handling errors and showing loader during the API request.

### File Structure
- `task-2/`
  - `index.html`: HTML file containing the recipe listing page.
  - `src/js/script.js`: JavaScript file with the Recipe API client, UI rendering, and recipe loading logic.
  - `src/css/styles.css`: CSS file for styling the recipe listing page.
  - `server.js`: Node.js server file to run the local server. Run with `node server.js`.

## Usage
1. For Task-1, run the server using `node task-1/server.js`. Open `task-1/index.html` in a web browser.
2. For Task-2, run the server using `node task-2/server.js`. Open `task-2/index.html` in a web browser.


