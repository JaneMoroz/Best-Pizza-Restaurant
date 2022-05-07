import React, { useState, useContext, useReducer, useEffect } from "react";
import { sublinks } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const getStorageCart = () => {
  let cart = [];
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  console.log(cart);
  return cart;
};

// Cart
const initialState = {
  cart: getStorageCart(),
  total: 0,
  amount: 0,
  isCartOpen: false,
  cartLocation: {},
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openCart = (coordinates) => {
    dispatch({ type: "OPEN_CART" });
  };

  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  const [searchMode, setSearchMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text.toLowerCase());
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openCart,
        closeCart,
        clearCart,
        addToCart,
        remove,
        toggleAmount,
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        location,
        page,
        searchMode,
        setSearchMode,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext };
