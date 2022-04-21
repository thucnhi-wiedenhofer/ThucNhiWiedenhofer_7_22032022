/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import {
  getRecipes,
  displayRecipes,
  init,
} from '../pages/index.js';
import {
  getIngredients,
  displayIngredientsField,
  getAppliances,
  displayAppliancesField,
  getUstensils,
  displayUstensilsField,
} from '../pages/displayFilterFields.js';
import { resetTags } from './searchByTag.js';

const { recipes } = await getRecipes();
const searchInput = document.querySelector('#search_input');

// reset recipes cards
export function resetDisplayRecipes() {
  document.querySelector('.recipes-section').innerHTML = '';
}

// reset filters field
export function resetDisplayFilters() {
  document.querySelector('#ingredients_list').innerHTML = '';
  document.querySelector('#appliances_list').innerHTML = '';
  document.querySelector('#ustensils_list').innerHTML = '';
}

// display alert message if no result
export function noResult() {
  const message = document.createElement('div');
  message.className = 'alert alert-dismissible alert-warning';
  const close = document.createElement('button');
  close.className = 'btn-close';
  close.setAttribute('type', 'button');
  close.setAttribute('data-bs-dismiss', 'alert');
  message.appendChild(close);
  const p = document.createElement('p');
  p.textContent = 'Aucune recette ne correspond à votre critère… Vous pouvez chercher « tarte aux pommes », « poisson », etc.';
  message.appendChild(p);
  const recipesSection = document.getElementById('recipes');
  recipesSection.appendChild(message);
}

// eslint-disable-next-line no-use-before-define
searchInput.addEventListener('input', mainSearch);

function mainSearch(e) {
  const searchedString = e.target.value.toLowerCase();
  const results = [];
  resetTags();

  // start to filter with 3 characters minimum in the input
  if (searchedString.length > 2) {
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].name.toLowerCase().includes(searchedString)) {
        results.push(recipes[i]);
      }
      if (recipes[i].description.toLowerCase().includes(searchedString)) {
        results.push(recipes[i]);
      }
      for (let j = 0; j < recipes[i].ingredients.length; j += 1) {
        if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(searchedString)) {
          results.push(recipes[i]);
        }
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
    }
  } else {
    init();
  }
}
