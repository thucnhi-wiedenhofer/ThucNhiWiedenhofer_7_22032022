/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import recipeCard from '../models/recipeCard.js';
import { noResult } from '../functions/mainSearch.js';
import { searchIngredients } from '../functions/searchByFilter.js';

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
    recipes.forEach((item) => {
      const recipesModel = recipeCard(item);
      const cardDOM = recipesModel.getRecipeCard();
      recipesSection.appendChild(cardDOM);
    });
  }
}

// Function to get all ingredients
export function getIngredients(recipes) {
  const ingredientsList = new Set();

  recipes.forEach((elt) => {
    elt.ingredients.forEach((item) => {
      ingredientsList.add(item.ingredient.toLowerCase());
    });
  });
  return ingredientsList;
}

// function to display all ingredients in field
export function displayIngredientsField(ingredientsList) {
  const ingredientsUl = document.getElementById('ingredients_list');
  const ingredientsArray = [...ingredientsList];
  if (ingredientsArray.length > 30) {
    ingredientsArray.length = 30;
  } else {
    ingredientsArray.slice();
  }
  ingredientsArray.forEach((element) => {
    const li = document.createElement('li');
    li.setAttribute('id', element);
    li.textContent = element;
    li.className = 'bg-primary';
    ingredientsUl.appendChild(li);
  });
}
/* When the user clicks, toggle between hiding and showing the dropdown content */
function closeIngredientsField() {
  document.getElementById('ingredients_menu').classList.remove('show');
}

function openIngredientsField() {
  document.getElementById('ingredients_menu').classList.toggle('show');
  window.addEventListener('click', closeIngredientsField);
}

document.getElementById('dropdown_ingredients').addEventListener('click', (event) => {
  openIngredientsField();
  event.stopPropagation();
});

// Function to get all appliances
export function getAppliances(recipes) {
  const appliancesList = new Set();

  recipes.forEach((item) => {
    appliancesList.add(item.appliance.toLowerCase());
  });
  return appliancesList;
}

// function to display all appliances in field
export function displayAppliancesField(appliancesList) {
  const appliancesUl = document.getElementById('appliances_list');
  const appliancesArray = [...appliancesList];
  if (appliancesArray.length > 30) {
    appliancesArray.length = 30;
  } else {
    appliancesArray.slice();
  }
  appliancesArray.forEach((element) => {
    const li = document.createElement('li');
    li.setAttribute('id', element);
    li.textContent = element;
    li.className = 'bg-success';
    appliancesUl.appendChild(li);
  });
}

/* When the user clicks, toggle between hiding and showing the dropdown content */
function closeAppliancesField() {
  document.getElementById('appliances_menu').classList.remove('show');
}

function openAppliancesField() {
  document.getElementById('appliances_menu').classList.toggle('show');
  window.addEventListener('click', closeAppliancesField);
}

document.getElementById('dropdown_appliances').addEventListener('click', (event) => {
  openAppliancesField();
  event.stopPropagation();
});

// Function to get all ustensils
export function getUstensils(recipes) {
  const ustensilsList = new Set();

  recipes.forEach((elt) => {
    elt.ustensils.forEach((item) => {
      ustensilsList.add(item.toLowerCase());
    });
  });
  return ustensilsList;
}

// function to display all ustensils in field
export function displayUstensilsField(ustensilsList) {
  const ustensilsUl = document.getElementById('ustensils_list');
  // convert set in array and display only 30:
  const ustensilsArray = [...ustensilsList];
  if (ustensilsArray.length > 30) {
    ustensilsArray.length = 30;
  } else {
    ustensilsArray.slice();
  }
  ustensilsArray.forEach((element) => {
    const li = document.createElement('li');
    li.setAttribute('id', element);
    li.textContent = element;
    /* li.setAttribute(
      'onclick',
      `displayTag('${element}', 'bg-warning'); searchByTag();`,
    ); */
    ustensilsUl.appendChild(li);
  });
}

/* When the user clicks, toggle between hiding and showing the dropdown content */
function closeUstensilsField() {
  document.getElementById('ustensils_menu').classList.remove('show');
}

function openUstensilsField() {
  document.getElementById('ustensils_menu').classList.toggle('show');
  window.addEventListener('click', closeUstensilsField);
}

document.getElementById('dropdown_ustensils').addEventListener('click', (event) => {
  openUstensilsField();
  event.stopPropagation();
});

export async function init() {
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
