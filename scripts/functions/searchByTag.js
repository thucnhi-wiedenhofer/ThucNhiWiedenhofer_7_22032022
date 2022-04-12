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
  tag.appendChild(span);
}

export function searchByTag(element) {
  const searchedString = element;
  const results = [];
  recipes.forEach((recipe) => {
    if (
      // eslint-disable-next-line max-len
      recipe.ingredients.filter((ingredients) => ingredients.ingredient.toLowerCase().includes(searchedString)).length > 0
      || recipe.appliances.toLowerCase().includes(searchedString)
      || recipe.ustensils.forEach((el) => el.toLowerCase().includes(searchedString))) {
      results.push(recipe);
      console.log(results);
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
