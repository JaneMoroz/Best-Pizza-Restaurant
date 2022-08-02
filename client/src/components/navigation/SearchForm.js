import React from "react";
import { FaTimes } from "../../utils/icons";
import { useFilterContext } from "../../context/filter_context";
import { useMenuContext } from "../../context/menu_context";

const SearchForm = () => {
  const {
    filters: { text },
    updateFilters,
  } = useFilterContext();
  const { isSearchOpen, closeSearch } = useMenuContext();

  const searchValue = React.useRef("");

  React.useEffect(() => {
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
      <div className="form-control">
        <input
          type="text"
          name="text"
          id="name"
          ref={searchValue}
          onChange={updateFilters}
          value={text}
          data-testid="search-input"
        />
      </div>
      <button
        className="btn btn--icon btn--form"
        onClick={closeSearch}
        aria-label="close"
      >
        <FaTimes className="icon" />
      </button>
    </form>
  );
};

export default SearchForm;
