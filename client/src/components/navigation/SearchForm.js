import React, { useEffect, useRef } from "react";
import { FaTimes } from "../../utils/icons";
import { useFilterContext } from "../../context/filter_context";
import { useNavContext } from "../../context/nav_context";

const SearchForm = () => {
  const {
    filters: { text },
    updateFilters,
  } = useFilterContext();
  const { isSearchOpen, closeSearch } = useNavContext();

  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, [isSearchOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      data-testid="search-from"
      className={`search-form ${isSearchOpen ? "show" : ""}`}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Search</label>
      <input
        type="text"
        name="text"
        id="name"
        ref={searchValue}
        onChange={updateFilters}
        value={text}
        data-testid="search-input"
        placeholder="search..."
      />
      <button
        className="btn btn--icon search-form__btn"
        onClick={closeSearch}
        aria-label="close"
        type="button"
        data-testid="search-close"
      >
        <FaTimes className="icon" />
      </button>
    </form>
  );
};

export default SearchForm;
