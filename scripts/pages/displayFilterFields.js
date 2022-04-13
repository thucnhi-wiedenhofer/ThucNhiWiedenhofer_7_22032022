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
    li.setAttribute(
      'onclick',
      `displayTag('${element}', 'bg-primary'); searchIngredientsByTag('${element}');`,
    );
    ingredientsUl.appendChild(li);
  });
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
    li.setAttribute(
      'onclick',
      `displayTag('${element}', 'bg-success'); searchAppliancesByTag('${element}');`,
    );
    appliancesUl.appendChild(li);
  });
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
    li.setAttribute(
      'onclick',
      `displayTag('${element}', 'bg-warning'); searchUstensilsByTag('${element}');`,
    );
    ustensilsUl.appendChild(li);
  });
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
