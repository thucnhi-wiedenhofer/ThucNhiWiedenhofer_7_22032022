function recipeCard(data) {
  const {
    id, name, servings, ingredients, time, description, appliance, ustensils
  } = data;

  function getRecipeCard() {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.setAttribute('id', `${id}`);

    const cardHeader = document.createElement('div');
    cardHeader.className = 'recipe-card-header';
    const img = document.createElement('img');
    img.setAttribute('src', `./assets/images/image_blanck.png`);
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
    icon.setAttribute('alt', `clock icon`);
    cardTitle.appendChild(h2);
    cardTitle.appendChild(icon);
    cardTitle.appendChild(span);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const ul = document.createElement('ul');
    ul.className = 'ingredients col-5';
    const li = document.createElement('li');
    li.textContent = ingredients;
    const p = document.createElement('p');
    p.className = 'instructions col-7';
    p.textContent = description;
    cardBody.appendChild(ul);
    ul.appendChild(li);
    cardBody.appendChild(p);

    card.appendChild(cardHeader);
    card.appendChild(cardTitle);
    card.appendChild(cardBody);

    return card;
  }
  return { getRecipeCard };
}