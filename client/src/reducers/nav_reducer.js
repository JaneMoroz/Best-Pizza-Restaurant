import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SUBMENU_OPEN,
  SUBMENU_CLOSE,
  SEARCH_OPEN,
  SEARCH_CLOSE,
} from "../utils/actions";

const nav_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === SUBMENU_OPEN) {
    const { page, coordinates } = action.payload;
    return {
      ...state,
      page,
      submenuLocation: { ...coordinates },
      isSubmenuOpen: true,
    };
  }
  if (action.type === SUBMENU_CLOSE) {
    return { ...state, isSubmenuOpen: false };
  }
  if (action.type === SEARCH_OPEN) {
    return { ...state, isSearchOpen: true };
  }
  if (action.type === SEARCH_CLOSE) {
    return { ...state, isSearchOpen: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default nav_reducer;
