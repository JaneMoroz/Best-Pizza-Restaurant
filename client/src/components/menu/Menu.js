import React from "react";
import { useMenuContext } from "../../context/menu_context";
import { useFilterContext } from "../../context/filter_context";
import MenuItem from "./MenuItem";
import Categories from "./Categories";
import Filters from "./Filters";
import Pagination from "./Pagination";

const Menu = () => {
  const { menu_loading: loading, menu_error: error } = useMenuContext();
  const { paginated_menu } = useFilterContext();

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return (
      <div className="error">
        <h1>There is an error!</h1>
        <p>Try again later.</p>
      </div>
    );
  }

  return (
    <section className="menu">
      <Categories />
      <div className="menu__products">
        <Filters />
        {/* nothing found */}
        {paginated_menu === undefined && (
          <div className="error">
            <h1>Nothing found!</h1>
            <p>Try to search something else.</p>
          </div>
        )}
        {/* end of nothing found */}
        <div className="products">
          {paginated_menu &&
            paginated_menu.map((item) => {
              return <MenuItem key={item.id} item={item} />;
            })}
        </div>
        {paginated_menu !== undefined && <Pagination />}
      </div>
    </section>
  );
};

export default Menu;
