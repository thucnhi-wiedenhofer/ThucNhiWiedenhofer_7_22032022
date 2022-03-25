/** ******Factory to create list of ingredients***** */
// eslint-disable-next-line no-unused-vars
function ingredientFactory(data) {
  const { ingredients } = data;

  const ul = document.createElement('ul');
  ul.className = 'ingredients col-5';

  function getIngredient() {

    for (let i = 0; i < ingredients.length; i += 1) {

      const li = document.createElement('li');

      li.textContent = ` ${ingredients[i].ingredient}: ${ingredients[i].quantity}${ingredients[i].unit}`;
      ul.appendChild(li);
    }
    return ul;
  }
  return { getIngredient };
}

