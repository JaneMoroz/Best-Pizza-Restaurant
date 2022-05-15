import {
  LOAD_MENU,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_MENU,
  UPDATE_FILTERS,
  FILTER_MENU,
  CLEAR_FILTERS,
  PAGINATE_MENU,
  UPDATE_PAGE,
} from "../actions";
import { paginate } from "../utils";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_MENU) {
    return {
      ...state,
      menu: [...action.payload],
      filtered_menu: [...action.payload],
      paginated_menu: [...action.payload],
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
    if (name === "category") {
      return {
        ...state,
        page: 0,
        filters: { ...state.filters, [name]: value, ["type"]: "all" },
      };
    }
    return { ...state, filters: { ...state.filters, [name]: value }, page: 0 };
  }
  if (action.type === FILTER_MENU) {
    const { menu } = state;
    const { text, category, type } = state.filters;
    let tempMenu = [...menu];
    // search
    if (text) {
      tempMenu = tempMenu.filter((menuItem) => {
        return menuItem.name.toLowerCase().includes(text.toLowerCase());
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
  if (action.type === PAGINATE_MENU) {
    let maxPages = paginate([...state.filtered_menu]).length;
    let tempMenu = paginate([...state.filtered_menu])[action.payload];
    return { ...state, paginated_menu: tempMenu, max_pages: maxPages };
  }
  if (action.type === UPDATE_PAGE) {
    return { ...state, page: action.payload };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
