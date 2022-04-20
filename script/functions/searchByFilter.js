/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import { getRecipes } from '../pages/index.js';
import {
  getIngredients,
  displayIngredientsField,
  getAppliances,
  displayAppliancesField,
  getUstensils,
  displayUstensilsField,
} from '../pages/displayFilterFields.js';

const { recipes } = await getRecipes();
const ingredientsList = getIngredients(recipes);
const appliancesList = getAppliances(recipes);
const ustensilsList = getUstensils(recipes);

const ingredientsInput = document.getElementById('ingredients_filter');
// eslint-disable-next-line no-use-before-define
ingredientsInput.addEventListener('input', searchIngredients);

export function searchIngredients(e) {
  const searchedString = e.target.value.toLowerCase();
  const results = [];
  ingredientsList.forEach((el) => {
    if (el.includes(searchedString)) {
      results.push(el);
    }
    document.querySelector('#ingredients_list').innerHTML = '';
    displayIngredientsField(results);
  });
}

const appliancesInput = document.getElementById('appliances_filter');
// eslint-disable-next-line no-use-before-define
appliancesInput.addEventListener('input', searchAppliances);

export function searchAppliances(e) {
  const searchedString = e.target.value.toLowerCase();
  const results = [];
  appliancesList.forEach((el) => {
    if (el.includes(searchedString)) {
      results.push(el);
    }
    document.querySelector('#appliances_list').innerHTML = '';
    displayAppliancesField(results);
  });
}

const ustensilsInput = document.getElementById('ustensils_filter');
// eslint-disable-next-line no-use-before-define
ustensilsInput.addEventListener('input', searchUstensils);

export function searchUstensils(e) {
  const searchedString = e.target.value.toLowerCase();
  const results = [];
  ustensilsList.forEach((el) => {
    if (el.includes(searchedString)) {
      results.push(el);
    }
    document.querySelector('#ustensils_list').innerHTML = '';
    displayUstensilsField(results);
  });
}
