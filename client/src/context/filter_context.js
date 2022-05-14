import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_MENU,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_MENU,
  UPDATE_FILTERS,
  FILTER_MENU,
  CLEAR_FILTERS,
} from "../actions";
import { useMenuContext } from "./menu_context";

const initialState = {
  filtered_menu: [],
  menu: [],
  sort: "name-a",
  filters: {
    text: "",
    category: "all",
    type: "all",
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { menu } = useMenuContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_MENU, payload: menu });
  }, [menu]);

  useEffect(() => {
    dispatch({ type: FILTER_MENU });
    dispatch({ type: SORT_MENU });
  }, [menu, state.sort, state.filters]);

  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "type") {
      value = e.target.textContent;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
        updateFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
