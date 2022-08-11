import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_MENU,
  UPDATE_SORT,
  SORT_MENU,
  UPDATE_FILTERS,
  FILTER_MENU,
  PAGINATE_MENU,
  UPDATE_PAGE,
} from "../utils/actions";
import { useMenuContext } from "./menu_context";
import { useNavContext } from "./nav_context";

const initialState = {
  filtered_menu: [],
  paginated_menu: [],
  menu: [],
  sort: "name-a",
  filters: {
    text: "",
    category: "all",
    type: "all",
  },
  page: 0,
  max_pages: 0,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { menu } = useMenuContext();
  const { isSearchOpen } = useNavContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_MENU, payload: menu });
  }, [menu]);

  useEffect(() => {
    dispatch({ type: FILTER_MENU });
    dispatch({ type: SORT_MENU });
    dispatch({ type: PAGINATE_MENU, payload: state.page });
  }, [menu, state.filters, state.sort, state.page]);

  useEffect(() => {
    if (!isSearchOpen) {
      let name = "text";
      let value = "";
      dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
    }
  }, [isSearchOpen]);

  const updateSort = (value) => {
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "type") {
      if (e.target.textContent.startsWith("#")) {
        value = e.target.textContent.substring(1);
      } else {
        value = e.target.textContent;
      }
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const updatePage = (numPage) => {
    dispatch({ type: UPDATE_PAGE, payload: numPage });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
        updateFilters,
        updatePage,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
