import {
  menu,
  single_menu_item,
  single_menu_item_options,
  cart,
  total_items,
  total_amount,
} from "./mockData";

const mockMenuContextInitialState = {
  menu_loading: false,
  menu_error: false,
  menu,
  single_menu_item_loading: false,
  single_menu_item_error: false,
  single_menu_item,
  single_menu_item_options,
};

const fetchMenuItem = jest.fn();

const mockCartContextInitialState = {
  cart,
  total_items,
  total_amount,
  isCartOpen: false,
  cartLocation: {},
};

const openCart = jest.fn();
const closeCart = jest.fn();
const addToCart = jest.fn();
const removeItem = jest.fn();
const toggleAmount = jest.fn();
const clearCart = jest.fn();

export const mockMenuContextValues = {
  ...mockMenuContextInitialState,
  fetchMenuItem,
};
export const mockCartContextValues = {
  ...mockCartContextInitialState,
  openCart,
  closeCart,
  addToCart,
  removeItem,
  toggleAmount,
  clearCart,
};
