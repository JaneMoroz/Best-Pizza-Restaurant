import React, { useContext, useReducer } from "react";
import reducer from "../reducers/nav_reducer";
import { sublinks } from "../assets/data/data";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SUBMENU_OPEN,
  SUBMENU_CLOSE,
  SEARCH_OPEN,
  SEARCH_CLOSE,
} from "../utils/actions";

const initialState = {
  isSidebarOpen: false,
  isSubmenuOpen: false,
  isSearchOpen: false,
  submenuLocation: {},
  page: { page: "", links: [] },
};

const NavContext = React.createContext();

export const NavProvider = ({ children }) => {
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

  return (
    <NavContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        openSearch,
        closeSearch,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  return useContext(NavContext);
};
