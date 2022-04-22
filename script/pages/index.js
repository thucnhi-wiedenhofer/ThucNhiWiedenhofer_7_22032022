/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import recipeCard from '../models/recipeCard.js';
import {
  getIngredients,
  displayIngredientsField,
  getAppliances,
  displayAppliancesField,
  getUstensils,
  displayUstensilsField,
} from './displayFilterFields.js';
import { noResult, resetDisplayFilters, resetDisplayRecipes } from '../functions/mainSearch.js';
import { displayTag, closeTag, resetTags } from '../functions/searchByTag.js';
import searchIngredients from '../functions/searchByFilter.js';

window.displayTag = displayTag;
window.closeTag = closeTag;

// eslint-disable-next-line consistent-return
export async function getRecipes() {
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
export function displayRecipes(recipes) {
  const recipesSection = document.querySelector('.recipes-section');

  if (recipes.length < 1) {
    // display alert message if no result
    noResult();
  } else {
    for (let i = 0; i < recipes.length; i += 1) {
      const recipesModel = recipeCard(recipes[i]);
      const cardDOM = recipesModel.getRecipeCard();
      recipesSection.appendChild(cardDOM);
    }
  }
}

export async function init() {
  try {
    // get data from recipes and display:
    const { recipes } = await getRecipes();
    const ingredientsList = getIngredients(recipes);
    const appliancesList = getAppliances(recipes);
    const ustensilsList = getUstensils(recipes);
    resetDisplayFilters();
    resetDisplayRecipes();
    resetTags();

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
