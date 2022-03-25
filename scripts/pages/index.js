/* eslint-disable no-undef */

// eslint-disable-next-line consistent-return
async function getRecipes() {

  // get recipes from recipes.json
  try {
    const response = await fetch('./data/recipes.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const recipes = await response.json();
    return recipes;
  } catch (error) {
    console.error(error);
  }
}

// Function to display recipes cards in landing page
async function displayRecipes(recipes) {
  const recipesSection = document.querySelector('.recipes-section');

  recipes.forEach((item) => {
    const recipesModel = recipeCard(item);
    const cardDOM = recipesModel.getRecipeCard();
    recipesSection.appendChild(cardDOM);
    const ingredientModel = ingredientFactory(item);
    const ingredientDOM = ingredientModel.getIngredient();
    const idIngredient = `${item.id}`;
    const cardBody = document.getElementById(idIngredient);
    cardBody.appendChild(ingredientDOM);
  });
}

async function init() {
  try {
    // get data from recipes and display:
    const { recipes } = await getRecipes();

    //display recipe cards:
    displayRecipes(recipes);
  } catch (error) {
    console.error(error);
  }
}
init();
