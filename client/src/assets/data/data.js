import {
  FaPizzaSlice,
  FaFish,
  FaDrumstickBite,
  FaHamburger,
  FaMugHot,
  FaBeer,
  FaWineGlassAlt,
  FaCocktail,
} from "../../utils/icons";
import React from "react";

/*
==============================
Menu Options
==============================
*/

export const menuOptions = [
  {
    category: "pizza",
    options: [
      {
        name: "Size",
        values: ["Small", "Medium", "Large"],
      },
      {
        name: "Extra Toppings",
        values: [
          "Cheese",
          "Onions",
          "Garlic",
          "Pepper",
          "Pepperoni",
          "Mushrooms",
        ],
      },
    ],
  },
  {
    category: "pasta",
    options: [
      {
        name: "Extra Toppings",
        values: [
          "Cheese",
          "Onions",
          "Garlic",
          "Pepper",
          "Pepperoni",
          "Mushrooms",
        ],
      },
    ],
  },
  {
    category: "salad",
    options: [
      {
        name: "Extra Toppings",
        values: [
          "Cheese",
          "Onions",
          "Garlic",
          "Pepper",
          "Pepperoni",
          "Mushrooms",
        ],
      },
    ],
  },
  {
    category: "drink",
    options: [
      {
        name: "Size",
        values: ["Small", "Medium", "Large"],
      },
      {
        name: "Extra Toppings",
        values: ["Sugar"],
      },
    ],
  },
];

/*
==============================
Menu
==============================
*/

export const menu = [
  {
    name: "Padrino",
    image: "/img/pizza/0.png",
    webpImg: "/img/pizza/0.webp",
    id: 0,
    price: "1999",
    description: [
      "Tomato sauce",
      "Caciocavallo ragusano",
      "Sopressata",
      "Gaeta olives",
      "Basil",
      "Grana",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
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
  },
  {
    name: "Pepperoni ",
    image: "/img/pizza/2.png",
    webpImg: "/img/pizza/2.webp",
    id: 2,
    price: "1599",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Pepperoni",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
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
    name: "Ricotta",
    image: "/img/pizza/4.png",
    webpImg: "/img/pizza/4.webp",
    id: 4,
    type: "vegan",
    price: "1499",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Ricotta",
      "Grana",
      "Basil",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
    name: "Capricciosa",
    image: "/img/pizza/7.png",
    webpImg: "/img/pizza/7.webp",
    id: 5,
    type: "gluten-free",
    price: "1649",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Artichokes",
      "Assorted mushrooms",
      "Roasted Italian pork",
      "Basil",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
    name: "Calzone",
    image: "/img/pizza/6.png",
    webpImg: "/img/pizza/6.webp",
    id: 6,
    price: "1749",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Salami",
      "Basil",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
    name: "Roberto",
    image: "/img/pizza/8.png",
    webpImg: "/img/pizza/8.webp",
    id: 7,
    type: "vegan",
    price: "1749",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Grape tomatoes",
      "Basil",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
    name: "Parma",
    image: "/img/pizza/9.png",
    webpImg: "/img/pizza/9.webp",
    id: 8,
    price: "2499",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Grape tomatoes",
      "Prosciutto di Parma",
      "Basil",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
    name: "Keste",
    image: "/img/pizza/10.png",
    webpImg: "/img/pizza/10.webp",
    id: 9,
    price: "1749",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Olives",
      "Pepperoni",
      "Basil",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
    name: "Margherita",
    image: "/img/pizza/11.png",
    webpImg: "/img/pizza/11.webp",
    id: 10,
    type: "gluten-free",
    price: "1749",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Olives",
      "Pepperoni",
      "Basil",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
    name: "Ribalta",
    image: "/img/pizza/12.png",
    webpImg: "/img/pizza/12.webp",
    id: 11,
    type: "gluten-free",
    price: "1849",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Italian Sausage",
      "Broccoli Rabe",
      "Basil",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
    name: "Pianeta",
    image: "/img/pizza/13.png",
    webpImg: "/img/pizza/13.webp",
    id: 12,
    type: "gluten-free",
    price: "1849",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Prosciutto di Parma",
      "Pepperoni",
      "Basil",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
    name: "Marinara",
    image: "/img/pizza/14.png",
    webpImg: "/img/pizza/14.webp",
    id: 13,
    type: "vegan",
    price: "1849",
    description: [
      "Tomato sauce",
      "Garlic",
      "Oregano",
      "Basil",
      "Extra virgin olive oil",
    ],
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
    name: "Norma",
    image: "/img/pizza/16.png",
    webpImg: "/img/pizza/16.webp",
    id: 15,
    price: "2449",
    description: [
      "Tomato sauce",
      "Eggplant",
      "Pepperoni",
      "Mushrooms",
      "Tomatoes",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
    name: "Montanara",
    image: "/img/pizza/17.png",
    webpImg: "/img/pizza/17.webp",
    id: 16,
    type: "gluten-free",
    price: "1949",
    description: [
      "Tomato sauce",
      "Chicken",
      "Mushrooms",
      "Tomatoes",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
    name: "Montanara Light",
    image: "/img/pizza/18.png",
    webpImg: "/img/pizza/18.webp",
    id: 17,
    type: "vegan",
    price: "1549",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Mushrooms",
      "Tomatoes",
      "Extra virgin olive oil",
    ],
    category: "pizza",
  },
  {
    name: "Goirgia",
    image: "/img/pizza/19.png",
    webpImg: "/img/pizza/19.webp",
    id: 18,
    price: "1949",
    description: [
      "Tomato sauce",
      "Fresh mozzarella",
      "Onions",
      "Shaved parmigiano reggiano",
      "Extra virgin olive oil",
    ],
    category: "pizza",
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
    name: "Mixed Salat",
    image: "/img/salad/0.png",
    webpImg: "/img/salad/0.webp",
    id: 23,
    type: "gluten-free",
    price: "649",
    description: ["Bell peppers ", "Onions", "Tomatoes"],
    category: "salad",
  },
  {
    name: "Cousous Salad",
    image: "/img/salad/1.png",
    webpImg: "/img/salad/1.webp",
    id: 24,
    type: "vegan",
    price: "599",
    description: ["Jamon", "Bell peppers", "Olives", "Mozzarella", "Gouda"],
    category: "salad",
  },
  {
    name: "Caesar Salad",
    image: "/img/salad/2.png",
    webpImg: "/img/salad/2.webp",
    type: "gluten-free",
    id: 25,
    price: "599",
    description: ["Chicken", "Cheddar", "Jalapeno"],
    category: "salad",
  },
  {
    name: "Chicken Salad",
    image: "/img/salad/3.png",
    webpImg: "/img/salad/3.webp",
    id: 26,
    price: "499",
    description: [
      "Ham",
      "Pizza sauce",
      "Chared pineapple",
      "Cheddar",
      "Jalapeno",
    ],
    category: "salad",
  },
  {
    name: "Insalata mista",
    image: "/img/salad/4.png",
    webpImg: "/img/salad/4.webp",
    id: 27,
    price: "699",
    description: ["Chicken", "Chared pineapple", "Cheddar", "Jalapeno"],
    category: "salad",
  },
  {
    name: "Caprese Salad",
    image: "/img/salad/5.png",
    webpImg: "/img/salad/5.webp",
    type: "vegan",
    id: 28,
    price: "650",
    description: ["Tomatoes", "Pizza sauce", "Basil", "Cheddar", "Jalapeno"],
    category: "salad",
  },
  {
    name: "Seafood Salad",
    image: "/img/salad/7.png",
    webpImg: "/img/salad/7.webp",
    id: 29,
    price: "599",
    description: ["Feta", "Pizza sauce", "Cucumber", "Cheddar", "Salad"],
    category: "salad",
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
    name: "Fruit Salad",
    image: "/img/salad/9.png",
    webpImg: "/img/salad/9.webp",
    type: "gluten-free",
    id: 31,
    price: "499",
    description: ["Strawberry", "Apple", "Orange", "Blueberry", "Kiwi"],
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
    name: "Caffè Americano",
    image: "/img/drinks/0.png",
    webpImg: "/img/drinks/0.webp",
    type: "coffee",
    id: 33,
    price: "350",
    description: ["Water", "Brewed Espresso"],
    category: "drink",
  },
  {
    name: "Cappuccino",
    image: "/img/drinks/1.png",
    webpImg: "/img/drinks/1.webp",
    type: "coffee",
    id: 34,
    price: "250",
    description: ["Milk", "Brewed Espresso"],
    category: "drink",
  },
  {
    name: "Espresso",
    image: "/img/drinks/2.png",
    webpImg: "/img/drinks/2.webp",
    type: "coffee",
    id: 35,
    price: "450",
    description: ["Brewed Espresso"],
    category: "drink",
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
    name: "Cosmopolitan",
    image: "/img/drinks/4.png",
    webpImg: "/img/drinks/4.webp",
    type: "cocktail",
    id: 37,
    price: "1599",
    description: ["Vodka", "Cointreau", "Lime juice", "Cranberry juice"],
    category: "drink",
  },
  {
    name: "Negroni",
    image: "/img/drinks/5.png",
    webpImg: "/img/drinks/5.webp",
    type: "cocktail",
    id: 38,
    price: "1699",
    description: ["Gin", "Blueberry juice", "Lime"],
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
  {
    name: "Pimm's Cup",
    image: "/img/drinks/8.png",
    webpImg: "/img/drinks/8.webp",
    type: "cocktail",
    id: 40,
    price: "1799",
    description: [
      "Pimm's No.1",
      "Lemonade",
      "Mint",
      "Orange",
      "Strawberries",
      "Cucumber",
    ],
    category: "drink",
  },
  {
    name: "Homemade Drink",
    image: "/img/drinks/9.png",
    webpImg: "/img/drinks/9.webp",
    type: "cocktail",
    id: 41,
    price: "1499",
    description: ["Lemonade", "Mint", "Orange", "Strawberries"],
    category: "drink",
  },
  {
    name: "Paloma",
    image: "/img/drinks/10.png",
    webpImg: "/img/drinks/10.webp",
    type: "cocktail",
    id: 42,
    price: "1799",
    description: ["Tequila", "Lime juice", "Grapefruit soda"],
    category: "drink",
  },
  {
    name: "Dark & Stormy",
    image: "/img/drinks/11.png",
    webpImg: "/img/drinks/11.webp",
    type: "cocktail",
    id: 43,
    price: "2199",
    description: ["Gosling’s Black Seal Rum", "Ginger beer"],
    category: "drink",
  },
  {
    name: "Mint Julep",
    image: "/img/drinks/12.png",
    webpImg: "/img/drinks/12.webp",
    type: "cocktail",
    id: 44,
    price: "1999",
    description: ["Bourbon", "Mint leaves"],
    category: "drink",
  },
  {
    name: "Iced Tea",
    image: "/img/drinks/6.png",
    webpImg: "/img/drinks/6.webp",
    type: "tea",
    id: 45,
    price: "1199",
    description: ["Tea", "Mint", "Syrup"],
    category: "drink",
  },
  {
    name: "Lemon Iced Tea ",
    image: "/img/drinks/13.png",
    webpImg: "/img/drinks/13.webp",
    type: "tea",
    id: 46,
    price: "1199",
    description: ["Tea", "Lemon Juice", "Syrup", "Lemon"],
    category: "drink",
  },
];

/*
==============================
Sublinks
==============================
*/

export const sublinks = [
  {
    page: "menu",
    links: [
      {
        label: "Pizza",
        icon: <FaPizzaSlice className="icon" />,
        url: "/products",
      },
      {
        label: "Meat",
        icon: <FaDrumstickBite className="icon" />,
        url: "/products",
      },
      {
        section: "Main",
        label: "Fish",
        icon: <FaFish className="icon" />,
        url: "/products",
      },
      {
        label: "Burgers",
        icon: <FaHamburger className="icon" />,
        url: "/products",
      },
      {
        label: "Coffee",
        icon: <FaMugHot className="icon" />,
        url: "/products",
      },
      {
        label: "Cocktails",
        icon: <FaCocktail className="icon" />,
        url: "/products",
      },
      { label: "Beer", icon: <FaBeer className="icon" />, url: "/products" },
      {
        label: "Wine",
        icon: <FaWineGlassAlt className="icon" />,
        url: "/products",
      },
    ],
  },
  {
    page: "locations",
    links: [
      { label: "New York", url: "/cities" },
      { label: "Dallas", url: "/cities" },
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
    page: "franchising",
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

export const testimonials = [
  {
    id: 1,
    name: "Susan Smith",
    image: "/img/users/user-1.jpg",
    text: "Best pizza ! I ordered 5 huge pizzas, delivery was super quick. I’ll order again soon",
    order: ["Marinara", "Georgia"],
  },
  {
    id: 2,
    name: "John Moore",
    image: "/img/users/user-2.jpg",
    text: "Quickest delivery ever",
    order: ["Pepperoni, Homemade Drink"],
  },
  {
    id: 3,
    name: "Anna Williams",
    image: "/img/users/user-3.jpg",
    text: "Loved your pizza! Thank you!",
    order: ["Macellato, White Truffle, Cappuccino"],
  },
];

/*
==============================
QA
==============================
*/

export const questions = [
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
