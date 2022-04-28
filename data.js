/*
==============================
Pizza
==============================
*/

const pizza = [
  {
    name: "Padrino",
    image: "./img/pizza/0.png",
    id: 0,
    price: "19.99",
    description: [
      "Tomato sauce",
      "Caciocavallo ragusano",
      "Sopressata",
      "Gaeta olives",
      "Basil",
      "Grana",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Macellato ",
    image: "./img/pizza/1.png",
    id: 1,
    type: "gluten-free",
    price: "25.99",
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
  },
  {
    name: "Pepperoni ",
    image: "./img/pizza/2.png",
    id: 2,
    price: "15.99",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Pepperoni",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Wild Truffle",
    image: "./img/pizza/3.png",
    id: 3,
    type: "vegan",
    price: "15.99",
    description: ["Mushrooms", "Truffled ricotta", "Arugula", "Parmigiano"],
  },
  {
    name: "Ricotta",
    image: "./img/pizza/4.png",
    id: 4,
    type: "vegan",
    price: "14.99",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Ricotta",
      "Grana",
      "Basil",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Capricciosa",
    image: "./img/pizza/7.png",
    id: 5,
    type: "gluten-free",
    price: "16.49",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Artichokes",
      "Assorted mushrooms",
      "Roasted Italian pork",
      "Basil",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Calzone",
    image: "./img/pizza/6.png",
    id: 6,
    price: "17.49",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Salami",
      "Basil",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Roberto",
    image: "./img/pizza/8.png",
    id: 7,
    type: "vegan",
    price: "17.49",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Grape tomatoes",
      "Basil",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Parma",
    image: "./img/pizza/9.png",
    id: 8,
    price: "24.99",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Grape tomatoes",
      "Prosciutto di Parma",
      "Basil",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Keste",
    image: "./img/pizza/10.png",
    id: 9,
    price: "17.49",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Olives",
      "Pepperoni",
      "Basil",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Margherita",
    image: "./img/pizza/11.png",
    id: 10,
    type: "gluten-free",
    price: "17.49",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Olives",
      "Pepperoni",
      "Basil",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Ribalta",
    image: "./img/pizza/12.png",
    id: 11,
    type: "gluten-free",
    price: "18.49",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Italian Sausage",
      "Broccoli Rabe",
      "Basil",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Pianeta",
    image: "./img/pizza/13.png",
    id: 12,
    type: "gluten-free",
    price: "18.49",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Prosciutto di Parma",
      "Pepperoni",
      "Basil",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Marinara",
    image: "./img/pizza/14.png",
    id: 13,
    type: "vegan",
    price: "18.49",
    description: [
      "Tomato sauce",
      "Garlic",
      "Oregano",
      "Basil",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Assorti",
    image: "./img/pizza/15.png",
    id: 14,
    price: "24.49",
    description: [
      "Tomato sauce",
      "Garlic",
      "Pepperoni",
      "Mushrooms",
      "Tomatoes",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Norma",
    image: "./img/pizza/16.png",
    id: 15,
    price: "24.49",
    description: [
      "Tomato sauce",
      "Eggplant",
      "Pepperoni",
      "Mushrooms",
      "Tomatoes",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Montanara",
    image: "./img/pizza/17.png",
    id: 16,
    type: "gluten-free",
    price: "19.49",
    description: [
      "Tomato sauce",
      "Chicken",
      "Mushrooms",
      "Tomatoes",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Montanara Light",
    image: "./img/pizza/18.png",
    id: 17,
    type: "vegan",
    price: "15.49",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Mushrooms",
      "Tomatoes",
      "Extra virgin olive oil",
    ],
  },
  {
    name: "Goirgia",
    image: "./img/pizza/19.png",
    id: 18,
    price: "19.49",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Onions",
      "Shaved parmigiano reggiano",
      "Extra virgin olive oil",
    ],
  },
];

/*
==============================
Pasta
==============================
*/

const pasta = [
  {
    name: "Gnocchi",
    image: "./img/pasta/0.png",
    id: 0,
    price: "11.49",
    description: ["San Marzano Tomatoes", "Buffalo Mozzarella", "Basil"],
  },
  {
    name: "Spaghetti",
    image: "./img/pasta/1.png",
    id: 1,
    price: "11.49",
    description: ["Cherry Tomatoes", "Buffalo Mozzarella", "Basil"],
  },
  {
    name: "Olives Pasta",
    image: "./img/pasta/2.png",
    id: 2,
    price: "11.49",
    description: ["Olives", "Buffalo Mozzarella", "Basil"],
  },
  {
    name: "Fornino Pasta",
    image: "./img/pasta/3.png",
    id: 3,
    price: "15.49",
    description: ["Pepperoni", "Buffalo Mozzarella", "Basil"],
  },
];

/*
==============================
Salads
==============================
*/

const salad = [
  {
    name: "Mixed Salat",
    image: "./img/salad/0.png",
    id: 0,
    type: "gluten-free",
    price: "6.49",
    description: ["Bell peppers ", "Onions", "Tomatoes"],
  },
  {
    name: "Cousous Salad",
    image: "./img/salad/1.png",
    id: 1,
    type: "vegan",
    price: "5.99",
    description: ["Jamon", "Bell peppers", "Olives", "Mozzarella", "Gouda"],
  },
  {
    name: "Caesar Salad",
    image: "./img/salad/2.png",
    type: "gluten-free",
    id: 2,
    price: "5.99",
    description: ["Chicken", "Cheddar", "Jalapeno"],
  },
  {
    name: "Chicken Salad",
    image: "./img/salad/3.png",
    id: 3,
    price: "4.99",
    description: [
      "Ham",
      "Pizza sauce",
      "Chared pineapple",
      "Cheddar",
      "Jalapeno",
    ],
    info: " Salad",
  },
  {
    name: "Insalata mista",
    image: "./img/salad/4.png",
    id: 4,
    price: "6.99",
    description: ["Chicken", "Chared pineapple", "Cheddar", "Jalapeno"],
    info: "Salad",
  },
  {
    name: "Caprese Salad",
    image: "./img/salad/5.png",
    type: "vegan",
    id: 5,
    price: "6.50",
    description: ["Tomatoes", "Pizza sauce", "Basil", "Cheddar", "Jalapeno"],
    info: "Salad",
  },
  {
    name: "Seafood Salad",
    image: "./img/salad/7.png",
    id: 6,
    price: "5.99",
    description: ["Feta", "Pizza sauce", "Cucumber", "Cheddar", "Salad"],
    info: "Salad",
  },
  {
    name: "Jalapeno Salad",
    image: "./img/salad/8.png",
    type: "gluten-free",
    id: 7,
    price: "7.99",
    description: ["Tomatoes", "Chicken", "Jalapeno", "Garlic"],
    info: "Salad",
  },
  {
    name: "Fruit Salad",
    image: "./img/salad/9.png",
    type: "gluten-free",
    id: 8,
    price: "4.99",
    description: ["Strawberry", "Apple", "Orange", "Blueberry", "Kiwi"],
    info: "Salad",
  },
  {
    name: "Avocado Salad",
    image: "./img/salad/10.png",
    type: "vegan",
    id: 9,
    price: "4.99",
    description: ["Avacado", "Chicken", "Olives"],
    info: "Salad",
  },
];

/*
==============================
Drinks
==============================
*/

const drinks = [
  {
    name: "Caffè Americano",
    image: "./img/drinks/0.png",
    type: "coffee",
    id: 0,
    price: "3.50",
    description: ["Water", "Brewed Espresso"],
  },
  {
    name: "Cappuccino",
    image: "./img/drinks/1.png",
    type: "coffee",
    id: 1,
    price: "2.50",
    description: ["Milk", "Brewed Espresso"],
  },
  {
    name: "Espresso",
    image: "./img/drinks/2.png",
    type: "coffee",
    id: 2,
    price: "4.50",
    description: ["Brewed Espresso"],
  },
  {
    name: "Caffè Latte",
    image: "./img/drinks/3.png",
    type: "coffee",
    id: 3,
    price: "4.50",
    description: ["Milk", "Brewed Espresso"],
  },
  {
    name: "Cosmopolitan",
    image: "./img/drinks/4.png",
    type: "cocktail",
    id: 4,
    price: "15.99",
    description: ["Vodka", "Cointreau", "Lime juice", "Cranberry juice"],
  },
  {
    name: "Negroni",
    image: "./img/drinks/5.png",
    type: "cocktail",
    id: 5,
    price: "16.99",
    description: ["Gin", "Blueberry juice", "Lime"],
  },
  {
    name: "Whiskey Sour",
    image: "./img/drinks/6.png",
    type: "cocktail",
    id: 6,
    price: "16.99",
    description: ["Whiskey", "Lemon juice", "Sugar", "Egg"],
  },
  {
    name: "Spritz",
    image: "./img/drinks/7.png",
    type: "cocktail",
    id: 7,
    price: "25.99",
    description: ["Aperol", "Cinzano Prosecco", "Splash of Soda"],
  },
  {
    name: "Pimm's Cup",
    image: "./img/drinks/8.png",
    type: "cocktail",
    id: 8,
    price: "17.99",
    description: [
      "Pimm's No.1",
      "Lemonade",
      "Mint",
      "Orange",
      "Strawberries",
      "Cucumber",
    ],
  },
  {
    name: "Homemade Drink",
    image: "./img/drinks/9.png",
    type: "cocktail",
    id: 9,
    price: "14.99",
    description: ["Lemonade", "Mint", "Orange", "Strawberries"],
  },
  {
    name: "Paloma",
    image: "./img/drinks/10.png",
    type: "cocktail",
    id: 10,
    price: "17.99",
    description: ["Tequila", "Lime juice", "Grapefruit soda"],
  },
  {
    name: "Dark & Stormy",
    image: "./img/drinks/11.png",
    type: "cocktail",
    id: 11,
    price: "21.99",
    description: ["Gosling’s Black Seal Rum", "Ginger beer"],
  },
  {
    name: "Mint Julep",
    image: "./img/drinks/12.png",
    type: "cocktail",
    id: 12,
    price: "19.99",
    description: ["Bourbon", "Mint leaves"],
  },
];

/*
==============================
Sublinks
==============================
*/

const sublinks = [
  {
    page: "menu",
    links: [
      { section: "Main", label: "Pizza", icon: <></>, url: "/products" },
      { section: "Main", label: "Meat", icon: <></>, url: "/products" },
      { section: "Main", label: "Fish", icon: <></>, url: "/products" },
      { section: "Main", label: "Burgers", icon: <></>, url: "/products" },
      { section: "Drinks", label: "Coffee", icon: <></>, url: "/products" },
      { section: "Drinks", label: "Cocktails", icon: <></>, url: "/products" },
      { section: "Drinks", label: "Beer", icon: <></>, url: "/products" },
      { section: "Drinks", label: "Wine", icon: <></>, url: "/products" },
    ],
  },
  {
    page: "locations",
    links: [
      { label: "New York", url: "/cities" },
      { label: "Dalla", url: "/cities" },
      { label: "Washington", url: "/cities" },
      { label: "New Orlean", url: "/cities" },
      { label: "Austin", url: "/cities" },
      { label: "Texas", url: "/cities" },
    ],
  },
  {
    page: "about",
    links: [
      { label: "About Us", url: "/about" },
      { label: "Careers", url: "/about" },
      { label: "Blog", url: "/about" },
      { label: "Contact Us", url: "/about" },
    ],
  },
  {
    page: "Franchising",
    links: [
      { label: "More Information", url: "/bussiness" },
      { label: "Stories", url: "/bussiness" },
    ],
  },
];

/*
==============================
Testimonials
==============================
*/

const testimonials = [
  {
    id: 1,
    name: "Susan Smith",
    image: "./img/users/user-1.jpg",
    test: "Best pizza ! I ordered 5 huge pizzas, delivery was super quick. I’ll order again soon",
    order: ["Marinara", "Georgia"],
  },
  {
    id: 2,
    name: "John Moore",
    image: "./img/users/user-1.jpg",
    test: "Quickest delivery ever",
    order: ["Pepperoni, Homemade Drink"],
  },
  {
    id: 3,
    name: "Anna Williams",
    image: "./img/users/user-1.jpg",
    test: "Loved pizza! Thank you!",
    order: ["Macellato, White Truffle, Cappuccino"],
  },
];

/*
==============================
QA
==============================
*/

const questions = [
  {
    id: 1,
    title: "Is your pizza good?",
    info: "Yes.",
  },
  {
    id: 2,
    title: "Do you use organic and fresh ingredients?",
    info: "Yes.",
  },
  {
    id: 3,
    title: "When will you introduce desserts?",
    info: "Soon.",
  },
];
