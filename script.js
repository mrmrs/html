async function generateRecipe() {
    const ingredientInput = document.getElementById('ingredientInput').value.trim();
    if (ingredientInput === '') {
        alert('Please enter your leftover ingredients!');
        return;
    }

    try {
        const recipe = await getRecipeFromAPI(ingredientInput);
        displayRecipe(recipe);
    } catch (error) {
        console.error('Error generating recipe:', error);
        alert('Error generating recipe. Please try again later.');
    }
}

async function getRecipeFromAPI(ingredients) {
    const response = await fetch('/generate-recipe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ingredients })
    });

    if (!response.ok) {
        throw new Error('Failed to fetch recipe from API');
    }

    const data = await response.json();
    return data.recipe;
}

function displayRecipe(recipe) {
    const recipeResult = document.getElementById('recipeResult');
    recipeResult.innerHTML = `<h2>Generated Recipe:</h2><p>${recipe}</p>`;
}
