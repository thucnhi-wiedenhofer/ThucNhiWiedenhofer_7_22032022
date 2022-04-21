// Function to get all ingredients
export function getIngredients(recipes) {
  const ingredientsList = [];

  for (let i = 0; i < recipes.length; i += 1) {
    for (let j = 0; j < recipes[i].ingredients.length; j += 1) {
      if (!ingredientsList.includes(recipes[i].ingredients[j].ingredient.toLowerCase())) {
        ingredientsList.push(recipes[i].ingredients[j].ingredient.toLowerCase());
      }
    }
  }
  return ingredientsList;
}

// function to display all ingredients in field
export function displayIngredientsField(ingredientsList) {
  const ingredientsUl = document.getElementById('ingredients_list');
  const ingredientsArray = ingredientsList;
  // display only 30:
  if (ingredientsArray.length > 30) {
    ingredientsArray.length = 30;
  }

  for (let i = 0; i < ingredientsArray.length; i += 1) {
    const li = document.createElement('li');
    li.setAttribute('id', ingredientsArray[i]);
    li.textContent = ingredientsArray[i];
    li.setAttribute(
      'onclick',
      `displayTag('${ingredientsArray[i]}', 'bg-primary');`,
    );
    ingredientsUl.appendChild(li);
  }
}

/* When the user clicks, toggle between hiding and showing the dropdown content */
function openIngredientsField() {
  document.getElementById('ingredients_menu').classList.toggle('show');
}
document.getElementById('dropdown_ingredients').addEventListener('click', () => {
  openIngredientsField();
  document.querySelector('#ingredients_filter').value = '';
});

// Prevents menu from closing when clicked inside:
document.getElementById('ingredients_menu').addEventListener('click', (event) => {
  event.stopPropagation();
});

// Closes the menu in the event of outside click
function close(event) {
  if (!event.target.matches('.dropdown-button')) {
    const dropdowns = document.getElementsByClassName('dropdown-menu');
    let i;
    for (i = 0; i < dropdowns.length; i += 1) {
      const opendropdown = dropdowns[i];
      if (opendropdown.classList.contains('show')) {
        opendropdown.classList.remove('show');
      }
    }
  }
}
window.addEventListener('click', close);

// Function to get all appliances
export function getAppliances(recipes) {
  const appliancesList = [];
  for (let i = 0; i < recipes.length; i += 1) {
    if (!appliancesList.includes(recipes[i].appliance.toLowerCase())) {
      appliancesList.push(recipes[i].appliance.toLowerCase());
    }
  }
  return appliancesList;
}

// function to display all appliances in field
export function displayAppliancesField(appliancesList) {
  const appliancesUl = document.getElementById('appliances_list');
  const appliancesArray = appliancesList;
  // display only 30:
  if (appliancesArray.length > 30) {
    appliancesArray.length = 30;
  }

  for (let i = 0; i < appliancesArray.length; i += 1) {
    const li = document.createElement('li');
    li.setAttribute('id', appliancesArray[i]);
    li.textContent = appliancesArray[i];
    li.setAttribute(
      'onclick',
      `displayTag('${appliancesArray[i]}', 'bg-success');`,
    );
    appliancesUl.appendChild(li);
  }
}

/* When the user clicks, toggle between hiding and showing the dropdown content */
function openAppliancesField() {
  document.getElementById('appliances_menu').classList.toggle('show');
  document.querySelector('#appliances_filter').value = '';
}
document.getElementById('dropdown_appliances').addEventListener('click', openAppliancesField);

// Prevents menu from closing when clicked inside:
document.getElementById('appliances_menu').addEventListener('click', (event) => {
  event.stopPropagation();
});

// Function to get all ustensils
export function getUstensils(recipes) {
  const ustensilsList = [];

  for (let i = 0; i < recipes.length; i += 1) {
    for (let j = 0; j < recipes[i].ustensils.length; j += 1) {
      if (!ustensilsList.includes(recipes[i].ustensils[j].toLowerCase())) {
        ustensilsList.push(recipes[i].ustensils[j].toLowerCase());
      }
    }
  }
  return ustensilsList;
}

// function to display all ustensils in field
export function displayUstensilsField(ustensilsList) {
  const ustensilsUl = document.getElementById('ustensils_list');
  const ustensilsArray = ustensilsList;
  // display only 30:
  if (ustensilsArray.length > 30) {
    ustensilsArray.length = 30;
  }

  for (let i = 0; i < ustensilsArray.length; i += 1) {
    const li = document.createElement('li');
    li.setAttribute('id', ustensilsArray[i]);
    li.textContent = ustensilsArray[i];
    li.setAttribute(
      'onclick',
      `displayTag('${ustensilsArray[i]}', 'bg-warning');`,
    );
    ustensilsUl.appendChild(li);
  }
}

/* When the user clicks, toggle between hiding and showing the dropdown content */
function openUstensilsField() {
  document.getElementById('ustensils_menu').classList.toggle('show');
  document.querySelector('#ustensils_filter').value = '';
}
document.getElementById('dropdown_ustensils').addEventListener('click', openUstensilsField);

// Prevents menu from closing when clicked inside:
document.getElementById('ustensils_menu').addEventListener('click', (event) => {
  event.stopPropagation();
});
