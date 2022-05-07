import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { menu } from "../data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import MenuItem from "./MenuItem";
import paginate from "../utils";

const Menu = () => {
  const { closeSubmenu, searchMode, setSearchMode, searchTerm } =
    useGlobalContext();

  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [menuTypes, setMenuTypes] = useState([]);

  // Pagination
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [displayMenuItems, setDisplayMenuItems] = useState([]);

  useEffect(() => {
    setCategory("pizza");
    setFilter("all");
    setMenuItems(menu.filter((menuItem) => menuItem.category === category));
    const allTypes = ["all", ...new Set(menuItems.map((item) => item.type))];
    setMenuTypes(allTypes);
    setLoading(false);
  }, []);

  // Without loading can't get data from menu items, because it is underfined
  useEffect(() => {
    if (loading) return;
    // Pagination
    setData(paginate(menuItems));
    setDisplayMenuItems(paginate(menuItems)[page]);
  }, [page, menuItems]);

  useEffect(() => {
    if (searchMode) {
      setCategory("");
      setMenuTypes([]);
      if (!searchTerm) {
        setLoading(true);
        setMenuItems(menu);
        setPage(0);
        setLoading(false);
      }
      if (searchTerm) {
        setLoading(true);
        const newMenuItems = menu.filter((menuItem) =>
          menuItem.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setMenuItems(newMenuItems);
        setPage(0);
        setLoading(false);
      }
    }
    if (!searchMode && category === "") {
      loadMenu("pizza");
    }
  }, [searchMode, searchTerm]);

  const filterItems = (type) => {
    setLoading(true);
    if (type === "all") {
      setMenuItems(menu.filter((menuItem) => menuItem.category === category));
      setFilter("all");
      setLoading(false);
      return;
    }
    const newItems = menu.filter(
      (menuItem) => menuItem.category === category && menuItem.type === type
    );
    setMenuItems(newItems);
    setFilter(type);
    setPage(0);
    setLoading(false);
  };

  const loadMenu = (category) => {
    setLoading(true);
    setSearchMode(false);
    setCategory(category);
    setMenuItems(menu.filter((menuItem) => menuItem.category === category));
    const allTypes = [
      "all",
      ...new Set(
        menu
          .filter((item) => item.category === category)
          .map((item) => item.type)
      ),
    ];
    setMenuTypes(allTypes);
    setFilter("all");
    setPage(0);
    setLoading(false);
  };

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <section className="menu" onMouseOver={closeSubmenu}>
      <nav className="menu__nav">
        <ul>
          <li>
            <button
              className={`btn ${category === "pizza" ? "btn--active" : ""}`}
              type="button"
              onClick={() => loadMenu("pizza")}
            >
              Pizza
            </button>
          </li>
          <li>
            <button
              className={`btn ${category === "pasta" ? "btn--active" : ""}`}
              type="button"
              onClick={() => loadMenu("pasta")}
            >
              Pasta
            </button>
          </li>
          <li>
            <button
              className={`btn ${category === "salad" ? "btn--active" : ""}`}
              type="button"
              onClick={() => loadMenu("salad")}
            >
              Salads
            </button>
          </li>
          <li>
            <button
              className={`btn ${category === "drink" ? "btn--active" : ""}`}
              type="button"
              onClick={() => loadMenu("drink")}
            >
              Drinks
            </button>
          </li>
        </ul>
      </nav>
      <div className="menu__products">
        <nav className="filters">
          <ul>
            {menuTypes.map((type, index) => {
              if (type) {
                return (
                  <li key={index}>
                    <button
                      className={`btn ${type === filter ? "btn--active" : ""}`}
                      type="button"
                      onClick={() => filterItems(type)}
                    >
                      {`${type === "all" ? "all" : `#${type}`}`}
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
        <div className="products">
          {displayMenuItems &&
            displayMenuItems.map((item) => {
              return <MenuItem key={item.id} item={item} />;
            })}
        </div>
        <div className="pagination">
          <button className="btn btn--outlined" onClick={prevPage}>
            <FaArrowLeft />
          </button>
          {data.map((item, index) => {
            return (
              <button
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
          <button className="btn btn--outlined" onClick={nextPage}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
