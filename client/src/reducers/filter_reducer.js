import {
  LOAD_MENU,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_MENU,
  UPDATE_FILTERS,
  FILTER_MENU,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_MENU) {
    return {
      ...state,
      menu: [...action.payload],
      filtered_menu: [...action.payload],
    };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_MENU) {
    const { sort, filtered_menu } = state;
    let tempMenu = [...filtered_menu];
    return { ...state, filtered_menu: tempMenu };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_MENU) {
    const { menu } = state;
    const { text, category, type } = state.filters;
    let tempMenu = [...menu];
    // search
    if (text) {
      tempMenu = tempMenu.filter((menuItem) => {
        return menuItem.name.toLowerCase().includes(text);
      });
    }
    // category filtering
    if (category !== "all") {
      tempMenu = tempMenu.filter((menuItem) => menuItem.category === category);
    }
    // type filtering
    if (type !== "all") {
      tempMenu = tempMenu.filter((menuItem) => menuItem.type === type);
    }
    return { ...state, filtered_menu: tempMenu };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
