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
const tag = document.getElementById('tags');

// eslint-disable-next-line no-unused-vars
export function displayTag(e, classe) {
  const span = document.createElement('span');
  span.textContent(e.target.value);
  span.className = `badge ${classe}`;
  const close = document.createElement('button');
  close.className = 'far fa-times-circle ms-2';
  close.setAttribute('type', 'button');
  close.setAttribute('data-bs-dismiss', 'alert');
  tag.appendChild(close);
  tag.appendChild(span);
}

export function searchByTag(e) {
  const searchedString = e.target.value.toLowerCase();
  const results = [];
  recipes.forEach((recipe) => {
    if (
      // eslint-disable-next-line max-len
      recipe.ingredients.filter((ingredients) => ingredients.ingredient.toLowerCase().includes(searchedString)).length > 0
      || recipe.appliances.toLowerCase().includes(searchedString)
      || recipe.ustensils.forEach((el) => el.toLowerCase().includes(searchedString))) {
      results.push(recipe);
    }
    resetDisplayRecipes();
    resetDisplayFilters();
    displayRecipes(results);
    const ingredientsList = getIngredients(results);
    const appliancesList = getAppliances(results);
    const ustensilsList = getUstensils(results);
    displayIngredientsField(ingredientsList);
    displayAppliancesField(appliancesList);
    displayUstensilsField(ustensilsList);
  });
}
