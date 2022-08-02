import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/menu_reducer";
import {
  menu as originalMenu,
  sublinks,
  menuOptions,
} from "../assets/data/data";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SUBMENU_OPEN,
  SUBMENU_CLOSE,
  SEARCH_OPEN,
  SEARCH_CLOSE,
  GET_MENU_BEGIN,
  GET_MENU_SUCCESS,
  GET_MENU_ERROR,
  GET_MENU_ITEM_BEGIN,
  GET_MENU_ITEM_SUCCESS,
  GET_MENU_ITEM_ERROR,
} from "../utils/actions";

const initialState = {
  isSidebarOpen: false,
  isSubmenuOpen: false,
  isSearchOpen: false,
  submenuLocation: {},
  page: { page: "", links: [] },
  menu_loading: false,
  menu_error: false,
  menu: [],
  single_menu_item_loading: false,
  single_menu_item_error: false,
  single_menu_item: {},
  single_menu_item_options: [],
};

const MenuContext = React.createContext();

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text.toLowerCase());
    dispatch({ type: SUBMENU_OPEN, payload: { page, coordinates } });
  };
  const closeSubmenu = () => {
    dispatch({ type: SUBMENU_CLOSE });
  };
  const openSearch = () => {
    dispatch({ type: SEARCH_OPEN });
  };
  const closeSearch = () => {
    dispatch({ type: SEARCH_CLOSE });
  };
  const fetchMenu = () => {
    dispatch({ type: GET_MENU_BEGIN });
    try {
      const menu = [...originalMenu];
      dispatch({ type: GET_MENU_SUCCESS, payload: menu });
    } catch (error) {
      dispatch({ type: GET_MENU_ERROR });
    }
  };
  const fetchMenuItem = (id) => {
    dispatch({ type: GET_MENU_ITEM_BEGIN });
    try {
      const menuItem = originalMenu.filter((item) => item.id === id)[0];
      let menuItemOptions = menuOptions.filter(
        (option) => option.category === menuItem.category
      );
      if (menuItemOptions.length > 0) {
        menuItemOptions = menuOptions.filter(
          (option) => option.category === menuItem.category
        )[0].options;
      }
      dispatch({
        type: GET_MENU_ITEM_SUCCESS,
        payload: { menuItem, menuItemOptions },
      });
    } catch (error) {
      dispatch({ type: GET_MENU_ITEM_ERROR });
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <MenuContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        openSearch,
        closeSearch,
        fetchMenuItem,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
