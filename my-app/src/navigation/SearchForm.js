import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { searchMode, setSearchMode, setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
    searchValue.current.value = "";
    setSearchTerm("");
  }, [searchMode]);

  const searchMenu = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className={`search-form ${searchMode ? "show" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="form-control">
        <input type="text" id="name" ref={searchValue} onChange={searchMenu} />
      </div>
      <button
        className="btn btn--icon btn--form"
        onClick={() => setSearchMode(false)}
      >
        <FaTimes className="icon" />
      </button>
    </form>
  );
};

export default SearchForm;
