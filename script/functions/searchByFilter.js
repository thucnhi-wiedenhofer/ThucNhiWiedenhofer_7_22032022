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

export default function searchIngredients(e) {
  const searchedString = e.target.value.toLowerCase();
  const results = [];
  for (let i = 0; i < ingredientsList.length; i += 0) {
    if (ingredientsList[i].includes(searchedString)) {
      results.push(ingredientsList[i]);
    }
    document.querySelector('#ingredients_list').innerHTML = '';
    displayIngredientsField(results);
  }
}

const appliancesInput = document.getElementById('appliances_filter');
// eslint-disable-next-line no-use-before-define
appliancesInput.addEventListener('input', searchAppliances);

function searchAppliances(e) {
  const searchedString = e.target.value.toLowerCase();
  const results = [];
  for (let i = 0; i < appliancesList.length; i += 0) {
    if (appliancesList[i].includes(searchedString)) {
      results.push(appliancesList[i]);
    }
    document.querySelector('#appliances_list').innerHTML = '';
    displayAppliancesField(results);
  }
}

const ustensilsInput = document.getElementById('ustensils_filter');
// eslint-disable-next-line no-use-before-define
ustensilsInput.addEventListener('input', searchUstensils);

function searchUstensils(e) {
  const searchedString = e.target.value.toLowerCase();
  const results = [];
  for (let i = 0; i < ustensilsList.length; i += 0) {
    if (ustensilsList[i].includes(searchedString)) {
      results.push(ustensilsList[i]);
    }
    document.querySelector('#ustensils_list').innerHTML = '';
    displayUstensilsField(results);
  }
}
