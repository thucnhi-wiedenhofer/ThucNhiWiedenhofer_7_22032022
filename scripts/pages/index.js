/* eslint-disable no-undef */

// eslint-disable-next-line consistent-return
async function getRecipes() {
  // get recipes from recipes.json
  try {
    const response = await fetch('./data/recipes.json');
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
  });
}

// Function to get all ingredients
function getIngredients(recipes) {
  const ingredientsList = new Set();

  recipes.forEach((elt) => {
    elt.ingredients.forEach((item) => {
      ingredientsList.add(item.ingredient.toLowerCase());
    });
  });
  console.log(ingredientsList);
  return ingredientsList;
}

// function to display all ingredients in field
function displayIngredientsField(ingredientsList) {
  const ingredientsUl = document.getElementById('ingredients_list');
  ingredientsList.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element;
    ingredientsUl.appendChild(li);
  });
}

// Function to get all appliances
function getAppliances(recipes) {
  const appliancesList = new Set();

  recipes.forEach((item) => {
    appliancesList.add(item.appliance.toLowerCase());
  });
  console.log(appliancesList);
  return appliancesList;
}

// function to display all appliances in field
function displayAppliancesField(appliancesList) {
  const appliancesUl = document.getElementById('appliances_list');
  appliancesList.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element;
    appliancesUl.appendChild(li);
  });
}

// Function to get all ustensils
function getUstensils(recipes) {
  const ustensilsList = new Set();

  recipes.forEach((elt) => {
    elt.ustensils.forEach((item) => {
      ustensilsList.add(item.toLowerCase());
    });
  });
  console.log(ustensilsList);
  return ustensilsList;
}

// function to display all ingredients in field
function displayUstensilsField(ustensilsList) {
  const ustensilsUl = document.getElementById('ustensils_list');
  ustensilsList.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element;
    ustensilsUl.appendChild(li);
  });
}

async function init() {
  try {
    // get data from recipes and display:
    const { recipes } = await getRecipes();
    const ingredientsList = getIngredients(recipes);
    const appliancesList = getAppliances(recipes);
    const ustensilsList = getUstensils(recipes);

    // display recipe cards:
    displayRecipes(recipes);
    displayIngredientsField(ingredientsList);
    displayAppliancesField(appliancesList);
    displayUstensilsField(ustensilsList);
  } catch (error) {
    console.error(error);
  }
}
init();
