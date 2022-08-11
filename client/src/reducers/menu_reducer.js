import {
  GET_MENU_BEGIN,
  GET_MENU_SUCCESS,
  GET_MENU_ERROR,
  GET_MENU_ITEM_BEGIN,
  GET_MENU_ITEM_SUCCESS,
  GET_MENU_ITEM_ERROR,
} from "../utils/actions";

const menu_reducer = (state, action) => {
  if (action.type === GET_MENU_BEGIN) {
    return { ...state, menu_loading: true };
  }
  if (action.type === GET_MENU_SUCCESS) {
    return {
      ...state,
      menu_loading: false,
      menu: action.payload,
    };
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
      single_menu_item: action.payload.menuItem,
      single_menu_item_options: action.payload.menuItemOptions,
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
