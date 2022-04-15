/* eslint-disable import/extensions */
import { getRecipes, displayRecipes, init } from '../pages/index.js';
import {
  getIngredients,
  displayIngredientsField,
  getAppliances,
  displayAppliancesField,
  getUstensils,
  displayUstensilsField,
} from '../pages/displayFilterFields.js';
import { resetDisplayFilters, resetDisplayRecipes } from './mainSearch.js';

const { recipes } = await getRecipes();

const divTags = document.getElementById('tags');
let tags = [];

// Function to create tag each time user click on li and tag is keep in local storage
// eslint-disable-next-line no-unused-vars
export function displayTag(element, classe) {
  if (localStorage.getItem('tags')) {
    tags = JSON.parse(localStorage.getItem('tags'));
  }
  const span = document.createElement('span');
  span.textContent = element;
  span.setAttribute('id', element);
  span.className = `badge ${classe} alert fade show`;
  const close = document.createElement('button');
  close.className = 'btn btn-circle';
  close.setAttribute('type', 'button');
  close.setAttribute('onclick', `closeTag('${element}')`);
  const icon = document.createElement('i');
  icon.className = 'far fa-times-circle ms-2';
  close.appendChild(icon);
  span.appendChild(close);
  divTags.appendChild(span);

  if (!tags.includes(element)) {
    tags.push(element);
    localStorage.setItem('tags', JSON.stringify(tags));
  }
  document.getElementById('ingredients_menu').classList.remove('show');
  document.getElementById('appliances_menu').classList.remove('show');
  document.getElementById('ustensils_menu').classList.remove('show');
  // eslint-disable-next-line no-use-before-define
  checkTag();
}

// dataArray is a set with all ingredients,appliances and ustensils
function searchByTag() {
  const filteredRecipes = [];

  recipes.forEach((recipe) => {
    const dataArray = new Set();
    const results = [];
    recipe.ingredients.forEach((item) => {
      dataArray.add(item.ingredient.toLowerCase());
    });
    dataArray.add(recipe.appliance.toLowerCase());
    recipe.ustensils.forEach((item) => {
      dataArray.add(item.toLowerCase());

      tags.forEach((el) => {
        if (dataArray.has(el.toLowerCase())) {
          results.push(dataArray.has(el.toLowerCase()));
        }
      });
      if (tags.length === results.length) {
        filteredRecipes.push(recipe);
      }
    });
  });
  localStorage.setItem('tagResult', JSON.stringify(filteredRecipes));
  return filteredRecipes;
}

function checkTag() {
  if (localStorage.getItem('tags')) {
    tags = JSON.parse(localStorage.getItem('tags'));
    if (tags.length > 0) {
      const filteredRecipes = searchByTag(tags);
      resetDisplayRecipes();
      resetDisplayFilters();
      displayRecipes(filteredRecipes);
      const ingredientsList = getIngredients(filteredRecipes);
      const appliancesList = getAppliances(filteredRecipes);
      const ustensilsList = getUstensils(filteredRecipes);
      displayIngredientsField(ingredientsList);
      displayAppliancesField(appliancesList);
      displayUstensilsField(ustensilsList);
    } else {
      init();
    }
  }
}

function removeItem(item, array) {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] === item) {
      // remove one element at index i:
      array.splice(i, 1);
    }
  }
}
// Function to remove tag on click and come back to the result of before
export function closeTag(tag) {
  tags = JSON.parse(localStorage.getItem('tags'));
  const target = document.getElementById(tag);
  divTags.removeChild(target);
  removeItem(tag, tags);
  localStorage.setItem('tags', JSON.stringify(tags));
  checkTag();
}
