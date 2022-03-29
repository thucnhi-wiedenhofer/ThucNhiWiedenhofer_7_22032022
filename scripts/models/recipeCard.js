/** ******Creation of recipe card***** */
// eslint-disable-next-line no-unused-vars
function recipeCard(data) {
  const {
    id, name, time, description, ingredients,
  } = data;

  function getRecipeCard() {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.setAttribute('id', id);

    const cardHeader = document.createElement('div');
    cardHeader.className = 'recipe-card-header';
    const img = document.createElement('img');
    img.setAttribute('src', './assets/images/image_blanck.png');
    img.setAttribute('alt', `picture of recipe ${name} to download `);
    cardHeader.appendChild(img);

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    const h2 = document.createElement('h2');
    h2.textContent = name;
    const span = document.createElement('span');
    span.textContent = `${time} min`;
    const icon = document.createElement('img');
    icon.setAttribute('src', './assets/images/clock.svg');
    icon.setAttribute('alt', 'clock icon');
    cardTitle.appendChild(h2);
    cardTitle.appendChild(icon);
    cardTitle.appendChild(span);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const ul = document.createElement('ul');
    ul.className = 'ingredients col-6';
    cardBody.appendChild(ul);

    let quantity;
    let unit;
    for (let i = 0; i < ingredients.length; i += 1) {
      const li = document.createElement('li');

      if (ingredients[i].quantity === undefined) {
        quantity = '';
      } else {
        quantity = ingredients[i].quantity;
      }
      if (ingredients[i].unit === 'grammes') {
        unit = 'g';
      } else if (ingredients[i].unit === 'cuillère à soupe') {
        unit = 'cuillère';
      } else if (ingredients[i].unit === 'cuillères à soupe') {
        unit = 'cuillères';
      } else if (ingredients[i].unit === undefined) {
        unit = '';
      } else {
        unit = ingredients[i].unit;
      }
      li.textContent = ` ${ingredients[i].ingredient}: ${quantity} ${unit}`;
      ul.appendChild(li);
    }
    const p = document.createElement('p');
    p.className = 'instructions col-6';
    p.textContent = description;
    cardBody.appendChild(p);

    card.appendChild(cardHeader);
    card.appendChild(cardTitle);
    card.appendChild(cardBody);

    return card;
  }
  return { getRecipeCard };
}
