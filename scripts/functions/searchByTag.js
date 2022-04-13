/* eslint-disable import/extensions */
import { getRecipes, displayRecipes } from '../pages/index.js';
import {
  getIngredients,
  displayIngredientsField,
  getAppliances,
  displayAppliancesField,
  getUstensils,
  displayUstensilsField,
} from '../pages/displayFilterFields.js';

import { resetDisplayRecipes, resetDisplayFilters } from './mainSearch.js';

const { recipes } = await getRecipes();
const ingredientsList = getIngredients(recipes);
const appliancesList = getAppliances(recipes);
const ustensilsList = getUstensils(recipes);
const div = document.getElementById('tags');

// eslint-disable-next-line no-unused-vars
export function displayTag(element, classe) {
  const span = document.createElement('span');
  span.textContent = element;
  span.className = `badge ${classe} alert fade show`;
  const close = document.createElement('button');
  close.className = 'btn btn-circle';
  close.setAttribute('type', 'button');
  close.setAttribute('data-bs-dismiss', 'alert');
  const icon = document.createElement('i');
  icon.className = 'far fa-times-circle ms-2';
  close.appendChild(icon);
  span.appendChild(close);
  div.appendChild(span);
  document.getElementById('ingredients_menu').classList.remove('show');
  document.getElementById('appliances_menu').classList.remove('show');
  document.getElementById('ustensils_menu').classList.remove('show');
}

function searchRecipesByTag(tag) {
  const recipesArray = [];
  recipes.forEach((recipe) => {
    if (
      recipe.appliance.toLowerCase().includes(tag)
    // eslint-disable-next-line max-len
    || recipe.ingredients.filter((ingredients) => ingredients.ingredient.toLowerCase().includes(tag)).length > 0
    || recipe.ustensils.forEach((item) => { item.toLowerCase().includes(tag); })) {
      recipesArray.push(recipe);
    }
    resetDisplayRecipes();
    displayRecipes(recipesArray);
    resetDisplayFilters();
    const ingredients = getIngredients(recipesArray);
    const appliances = getAppliances(recipesArray);
    const ustensils = getUstensils(recipesArray);
    displayIngredientsField(ingredients);
    displayAppliancesField(appliances);
    displayUstensilsField(ustensils);
  });
}

export function searchIngredientsByTag(element) {
  const searchedString = element;
  const results = [];

  ingredientsList.forEach((el) => {
    if (el.includes(searchedString)) {
      results.push(el);
    }
    document.querySelector('#ingredients_list').innerHTML = '';
    displayIngredientsField(results);
    searchRecipesByTag(results);
  });
}

export function searchAppliancesByTag(element) {
  const searchedString = element;
  const results = [];

  appliancesList.forEach((el) => {
    if (el.includes(searchedString)) {
      results.push(el);
    }
    document.querySelector('#appliances_list').innerHTML = '';
    displayAppliancesField(results);
    searchRecipesByTag(results);
  });
}

export function searchUstensilsByTag(element) {
  const searchedString = element;
  const results = [];

  ustensilsList.forEach((el) => {
    if (el.includes(searchedString)) {
      results.push(el);
    }
    document.querySelector('#ustensils_list').innerHTML = '';
    displayUstensilsField(results);
    searchRecipesByTag(results);
  });
}
