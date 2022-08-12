export const single_menu_item = {
  name: "Macellato ",
  image: "/img/pizza/1.png",
  webpImg: "/img/pizza/1.webp",
  id: 1,
  type: "gluten-free",
  price: "2599",
  description: [
    "Tomato sauce",
    "Fresh mozzarella",
    "Sausage",
    "Porchetta",
    "Crespone salami",
    "Prosciutto di Parma",
    "Basil",
    "Extra virgin olive oil",
  ],
  category: "pizza",
};

export const single_menu_item_options = [
  { name: "Size", values: ["Small", "Medium", "Large"] },
  {
    name: "Extra Toppings",
    values: ["Cheese", "Onions", "Garlic", "Pepper", "Pepperoni", "Mushrooms"],
  },
];

// pizza - 2, pasta - 4, salad - 2, drink - 2
// gluten-free - 3, vegan - 2, coffee - 1, cocktail - 1, no filter - 3
export const menu = [
  {
    name: "Wild Truffle",
    image: "/img/pizza/3.png",
    webpImg: "/img/pizza/3.webp",
    id: 3,
    type: "vegan",
    price: "1599",
    description: ["Mushrooms", "Truffled ricotta", "Arugula", "Parmigiano"],
    category: "pizza",
  },
  {
    name: "Assorti",
    image: "/img/pizza/15.png",
    webpImg: "/img/pizza/15.webp",
    id: 14,
    price: "2449",
    description: [
      "Tomato sauce",
      "Garlic",
      "Pepperoni",
      "Mushrooms",
      "Tomatoes",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
    name: "Jalapeno Salad",
    image: "/img/salad/8.png",
    webpImg: "/img/salad/8.webp",
    type: "gluten-free",
    id: 30,
    price: "799",
    description: ["Tomatoes", "Chicken", "Jalapeno", "Garlic"],
    category: "salad",
  },
  {
    name: "Avocado Salad",
    image: "/img/salad/10.png",
    webpImg: "/img/salad/10.webp",
    type: "vegan",
    id: 32,
    price: "499",
    description: ["Avacado", "Chicken", "Olives"],
    category: "salad",
  },
  {
    name: "Gnocchi",
    image: "/img/pasta/0.png",
    webpImg: "/img/pasta/0.webp",
    type: "gluten-free",
    id: 19,
    price: "1149",
    description: ["San Marzano Tomatoes", "Buffalo Mozzarella", "Basil"],
    category: "pasta",
  },
  {
    name: "Spaghetti",
    image: "/img/pasta/1.png",
    webpImg: "/img/pasta/1.webp",
    id: 20,
    price: "1149",
    description: ["Cherry Tomatoes", "Buffalo Mozzarella", "Basil"],
    category: "pasta",
  },
  {
    name: "Olives Pasta",
    image: "/img/pasta/2.png",
    webpImg: "/img/pasta/2.webp",
    type: "gluten-free",
    id: 21,
    price: "1149",
    description: ["Olives", "Buffalo Mozzarella", "Basil"],
    category: "pasta",
  },
  {
    name: "Fornino Pasta",
    image: "/img/pasta/3.png",
    webpImg: "/img/pasta/3.webp",
    id: 22,
    price: "1549",
    description: ["Pepperoni", "Buffalo Mozzarella", "Basil"],
    category: "pasta",
  },
  {
    name: "Caffè Latte",
    image: "/img/drinks/3.png",
    webpImg: "/img/drinks/3.webp",
    type: "coffee",
    id: 36,
    price: "450",
    description: ["Milk", "Brewed Espresso"],
    category: "drink",
  },
  {
    name: "Spritz",
    image: "/img/drinks/7.png",
    webpImg: "/img/drinks/7.webp",
    type: "cocktail",
    id: 39,
    price: "2599",
    description: ["Aperol", "Cinzano Prosecco", "Splash of Soda"],
    category: "drink",
  },
];

export const cart = [
  {
    amount: 1,
    category: "salad",
    id: "32Small",
    image: "/img/salad/10.png",
    menuId: 32,
    name: "Avocado Salad",
    price: "499",
    size: "Small",
    toppings: [],
  },
  {
    amount: 1,
    category: "pizza",
    id: "2Small",
    image: "/img/pizza/2.png",
    menuId: 2,
    name: "Pepperoni ",
    price: "1599",
    size: "Small",
    toppings: [],
  },
];
export const total_items = 2;
export const total_amount = 20.98;
