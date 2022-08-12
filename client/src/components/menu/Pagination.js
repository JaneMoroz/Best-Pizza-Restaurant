import React from "react";
import { FaArrowLeft, FaArrowRight } from "../../utils/icons";
import { useFilterContext } from "../../context/filter_context";

const Pagination = () => {
  const { page, updatePage, max_pages } = useFilterContext();

  // Pagination buttons handlers
  const handlePage = (index) => {
    updatePage(index);
  };

  const nextPage = () => {
    let nextPage = page + 1;
    if (nextPage > max_pages - 1) {
      nextPage = 0;
    }
    updatePage(nextPage);
  };

  const prevPage = () => {
    let prevPage = page - 1;
    if (prevPage < 0) {
      prevPage = max_pages - 1;
    }
    updatePage(prevPage);
  };

  return (
    <div className="pagination" data-testid="pagination">
      <button
        type="button"
        className="btn btn--outlined"
        onClick={prevPage}
        aria-label="previous page"
      >
        <FaArrowLeft />
      </button>
      {[...Array(max_pages)].map((x, index) => {
        return (
          <button
            type="button"
            key={index}
            className={`btn btn--outlined ${
              index === page ? "btn--active" : ""
            }`}
            onClick={() => handlePage(index)}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        type="button"
        className="btn btn--outlined"
        onClick={nextPage}
        aria-label="next page"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
