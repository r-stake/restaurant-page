import { createReference, createElement, appendElement, addTextContent, addClass } from "./helper_functions";
import { createMainSection } from "./helper_functions";

export const menu = {
  appetizers: [
    {
      name: "Spinach Artichoke Dip",
      ingredients: "Spinach, artichokes, cream cheese, parmesan, tortilla chips",
      price: "€9.99",
    },
    {
      name: "Crispy Calamari",
      ingredients: "Calamari, seasoned flour, marinara sauce",
      price: "€11.99",
    },
    {
      name: "Buffalo Wings",
      ingredients: "Chicken wings, buffalo sauce, blue cheese dressing, celery",
      price: "€10.99",
    },
    {
      name: "Loaded Nachos",
      ingredients: "Tortilla chips, ground beef, cheddar cheese, jalapeños, sour cream",
      price: "€12.99",
    },
    {
      name: "Garlic Knots",
      ingredients: "Pizza dough, garlic, parsley, olive oil",
      price: "€8.99",
    }
  ],
  vegan: [
    {
      name: 'Grilled Veggie Skewers',
      ingredients: 'Seasonal vegetables, olive oil, herbs',
      price: "€12.99",
    },
    {
      name: "Quinoa and Kale Salad",
      ingredients: "Quinoa, kale, cherry tomatoes, cucumber, lemon vinaigrette",
      price: "€11.99",
    },
    {
      name: "Vegan Pad Thai",
      ingredients: "Rice noodles, tofu, peanuts, bean sprouts, tamarind sauce",
      price: "€14.99",
    },
    {
      name: "Lentil Curry",
      ingredients: "Lentils, coconut milk, curry spices, vegetables",
      price: "€13.99",
    },
    {
      name: "Beyond Burger",
      ingredients: "Beyond Meat patty, lettuce, tomato, vegan cheese, brioche bun",
      price: "€15.99",
    },
    {
      name: "Ursula's Stew",
      ingredients: "Sweet potatoes, tomatoes, carrots, mushrooms, chickpeas, peas, celery, lentils, kale, onions, garlic",
      price: "€17.99",
    }
  ],
  burgers: [
    {
      name: "Classic Cheeseburger",
      ingredients: "Beef patty, cheddar cheese, lettuce, tomato, pickles, brioche bun",
      price: "€13.99", 
    },
    {
      name: "BBQ Bacon Burger",
      ingredients: "Beef patty, bacon, barbecue sauce, onion rings, brioche bun",
      price: "€15.99",
    },
    {
      name: "Mushroom Swiss Burger",
      ingredients: "Beef patty, sautéed mushrooms, Swiss cheese, truffle aioli, brioche bun",
      price: "€14.99",
    }
  ],
  pizzas: [
    {
      name: "Margherita Pizza",
      ingredients: "Tomato sauce, fresh mozzarella, basil",
      price: "€12.99",
    },
    {
      name: "Pepperoni Pizza",
      ingredients: "Tomato sauce, mozzarella, pepperoni",
      price: "€14.99",
    },
    {
      name: "Supreme Pizza",
      ingredients: "Tomato sauce, mozzarella, pepperoni, sausage, bell peppers, onions",
      price: "€16.99",
    },
    {
      name: "Veggie Delight Pizza",
      ingredients: "Tomato sauce, mozzarella, mushrooms, bell peppers, olives, onions",
      price: "€15.99",
    },
    {
      name: "Meat Lover's Pizza",
      ingredients: "Tomato sauce, mozzarella, pepperoni, sausage, bacon, ham",
      price: "€17.99",
    }
  ],
  "chef's specials": [
    {
      name: "Grilled Salmon",
      ingredients: "Fresh salmon, lemon butter sauce, roasted vegetables",
      price: "€18.99",
    },
    {
      name: "Chicken Alfredo",
      ingredients: "Grilled chicken, fettuccine, creamy Alfredo sauce",
      price: "€16.99",
    },
    {
      name: "Ribeye Steak",
      ingredients: "Ribeye steak, mashed potatoes, sautéed spinach",
      price: "€22.99",
    },
    {
      name: "Shrimp Scampi",
      ingredients: "Shrimp, garlic butter sauce, linguine",
      price: "€20.99",
    },
    {
      name: "Vegetable Stir-Fry",
      ingredients: "Mixed vegetables, tofu, soy sauce, ginger",
      price: "€15.99",
    }
  ],
  salads: [
    {
      name: "Caesar Salad",
      ingredients: "Romaine lettuce, croutons, parmesan cheese, Caesar dressing",
      price: "€10.99",
    },
    {
      name: "Greek Salad",
      ingredients: "Romaine lettuce, feta cheese, olives, cucumbers, tomatoes, red onions, Greek dressing",
      price: "€11.99",
    },
    {
      name: "Caprese Salad",
      ingredients: "Fresh mozzarella, tomatoes, basil, balsamic glaze",
      price: "€12.99",
    }
  ],
  deserts: [
    {
      name: "New York Cheesecake",
      ingredients: "Cream cheese, graham cracker crust, sour cream topping",
      price: "€8.99",
    },
    {
      name: "Chocolate Lava Cake",
      ingredients: "Chocolate, butter, eggs, vanilla ice cream",
      price: "€9.99",
    },
    {
      name: "Tiramisu",
      ingredients: "Ladyfingers, espresso, mascarpone cheese, cocoa powder",
      price: "€9.99",
    },
    {
      name: "Key Lime Pie",
      ingredients: "Key lime juice, condensed milk, graham cracker crust",
      price: "€8.99",
    },
    {
      name: "Crème Brûlée",
      ingredients: "Heavy cream, vanilla bean, caramelized sugar",
      price: "€9.99",
    }
  ],
  drinks: [
    {
      name: "Classic Mojito",
      ingredients: "Rum, mint, lime, soda water",
      price: "€9.99",
    },
    {
      name: "Strawberry Daiquiri",
      ingredients: "Rum, strawberries, lime juice, simple syrup",
      price: "€10.99",
    },
    {
      name: "Old Fashioned",
      ingredients: "Bourbon, sugar, bitters, orange peel",
      price: "€11.99",
    },
    {
      name: "Mango Tango Smoothie",
      ingredients: "Mango, yogurt, honey",
      price: "€7.99",
    },
    {
      name: "Iced Caramel Macchiato",
      ingredients: "Espresso, milk, caramel syrup",
      price: "€6.99",
    }
  ]
}

function createCard() {
  const divMenu = createReference(".menu");
  const card = createElement("div");
  appendElement(divMenu, card);
  addClass(card, "dish");

  const h3Card = createElement("h3");
  appendElement(card, h3Card);
  addClass(h3Card, "name");

  const ingredients = createElement("p");
  const price = createElement("p");
  appendElement(card, ingredients);
  appendElement(card, price);
  addClass(ingredients, "ingredients");
  addClass(price, "price");
}

function populateCard(object) {
  const name = createReference(".name:empty");
  const ingredients = createReference(".ingredients:empty");
  const price = createReference(".price:empty");

  addTextContent(name, object.name)
  addTextContent(ingredients, object.ingredients);
  addTextContent(price, object.price);
}

function createMenuSectionName(name) {
  if (name[0] === name[0].toLowerCase()) {
    name = name[0].toUpperCase() + name.slice(1);
  }
  const divMenu = createReference(".menu");
  const menuSectionName = createElement("h2");
  appendElement(divMenu, menuSectionName);
  addTextContent(menuSectionName, name);
}

function createMenu() {
  for (const key in menu) {
    if (menu.hasOwnProperty(key)) {
      createMenuSectionName(key);
      menu[key].forEach(element => {
        createCard();
        populateCard(element);
      });
    }
  }
}

export default function renderMenu() {
  createMainSection("menu");
  createMenu();
}