/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import { getRecipes, displayRecipes } from '../pages/index.js';

const { recipes } = await getRecipes();
const searchInput = document.querySelector('#search_input');

function resetDisplayRecipes() {
  document.querySelector('.recipes-section').innerHTML = '';
}

// eslint-disable-next-line no-use-before-define
searchInput.addEventListener('input', mainSearch);

function mainSearch(e) {
  const searchedString = e.target.value.toLowerCase();
  const results = [];
  recipes.forEach((el) => {
    if (
      el.name.toLowerCase().includes(searchedString)
      // eslint-disable-next-line max-len
      || el.ingredients.filter((ingredients) => ingredients.ingredient.toLowerCase().includes(searchedString)).length > 0
      || el.description.toLowerCase().includes(searchedString)) {
      results.push(el);
      console.log(results);
    }
    resetDisplayRecipes();
    displayRecipes(results);
  });
}

export default mainSearch;
/*
function mainSearch(e) {
  const searchedString = e.target.value.toLowerCase();
  console.log(recipes);
  const filteredArray = recipes.filter((el) => el.name.toLowerCase().includes(searchedString))
  || el.ingredients.ingredient.toLowerCase().includes(searchedString)
  || el.description.toLowerCase().includes(searchedString);
  displayRecipes(filteredArray);
}
*/
