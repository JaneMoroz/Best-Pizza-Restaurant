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
} from "../actions";

const menu_reducer = (state, action) => {
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
  if (action.type === GET_MENU_BEGIN) {
    return { ...state, menu_loading: true };
  }
  if (action.type === GET_MENU_SUCCESS) {
    return { ...state, menu_loading: false, menu: action.payload };
  }
  if (action.type === GET_MENU_ERROR) {
    return { ...state, menu_loading: false, menu_error: true };
  }
  if (action.type === GET_MENU_ITEM_BEGIN) {
    return { ...state, single_menu_item_loading: true };
  }
  if (action.type === GET_MENU_ITEM_SUCCESS) {
    return {
      ...state,
      single_menu_item_loading: false,
      single_menu_item: action.payload,
    };
  }
  if (action.type === GET_MENU_ITEM_ERROR) {
    return {
      ...state,
      single_menu_item_loading: false,
      single_menu_item_error: true,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default menu_reducer;
