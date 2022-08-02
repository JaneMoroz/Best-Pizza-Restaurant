import {
  LOAD_MENU,
  UPDATE_SORT,
  SORT_MENU,
  UPDATE_FILTERS,
  FILTER_MENU,
  PAGINATE_MENU,
  UPDATE_PAGE,
} from "../utils/actions";
import { paginate } from "../utils/helpers";

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
    const { sort } = action.payload;
    return { ...state, sort };
  }
  if (action.type === SORT_MENU) {
    const { sort, filtered_menu } = state;
    let tempMenu = [...filtered_menu];
    if (sort === "price-lowest") {
      tempMenu = tempMenu.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempMenu = tempMenu.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempMenu = tempMenu.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempMenu = tempMenu.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
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
    if (name === "text") {
      return {
        ...state,
        page: 0,
        filters: {
          ...state.filters,
          [name]: value,
          ["type"]: "all",
          ["category"]: "all",
        },
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
