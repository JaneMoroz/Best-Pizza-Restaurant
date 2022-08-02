import {
  ADD_TO_CART,
  CLEAR_CART,
  CLOSE_CART,
  COUNT_CART_TOTALS,
  OPEN_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../utils/actions";

const cart_reducer = (state, action) => {
  if (action.type === OPEN_CART) {
    return { ...state, isCartOpen: true };
  }
  if (action.type === CLOSE_CART) {
    return { ...state, isCartOpen: false };
  }
  if (action.type === ADD_TO_CART) {
    const {
      image,
      name,
      price,
      id,
      amount = 1,
      size = "Small",
      toppings = [],
      category,
    } = action.payload;

    // Create id
    let itemId = "";
    if (toppings.length > 0) {
      toppings.sort();
      const toppingsString = toppings.join("");
      itemId = id + size + toppingsString;
    } else {
      itemId = id + size;
    }

    const tempItem = state.cart.find((i) => i.id === itemId);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === itemId) {
          let newAmount = cartItem.amount + amount;
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        menuId: id,
        image,
        name,
        price,
        id: itemId,
        amount: 1,
        size,
        toppings,
        category,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_items, total_amount };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
