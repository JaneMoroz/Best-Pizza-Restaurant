import React from "react";
import { FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import Cart from "../cart/Cart";
import SearchForm from "./SearchForm";
import { Link, useParams } from "react-router-dom";
import { useMenuContext } from "../../context/menu_context";
import { useCartContext } from "../../context/cart_context";

const Navbar = () => {
  const { id } = useParams();
  const {
    openSidebar,
    openSubmenu,
    closeSubmenu,
    isSearchOpen,
    openSearch,
    closeSearch,
  } = useMenuContext();
  const { isCartOpen, openCart, closeCart, total_items } = useCartContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 1;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
    if (e.target.classList.contains("nav__btns")) {
      closeSubmenu();
    }
  };

  const handleSearch = () => {
    if (isSearchOpen) {
      closeSearch();
    } else {
      openSearch();
    }
  };

  return (
    <header className="container">
      <nav className="nav">
        <Link to={"/"} className="logo">
          Best Pizza
        </Link>
        <div className="nav__links" onMouseOver={handleSubmenu}>
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <button
                className="link-btn btn"
                type="button"
                onMouseOver={displaySubmenu}
              >
                Menu
              </button>
            </li>
            <li>
              <button
                className="link-btn btn"
                type="button"
                onMouseOver={displaySubmenu}
              >
                Locations
              </button>
            </li>
            <li>
              <button
                className="link-btn btn"
                type="button"
                onMouseOver={displaySubmenu}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="link-btn btn"
                type="button"
                onMouseOver={displaySubmenu}
              >
                Franchising
              </button>
            </li>
          </ul>
        </div>
        <div className="nav__btns" onMouseOver={handleSubmenu}>
          {id ? (
            <Link
              to={"/"}
              type="button"
              className="btn btn--search"
              onClick={handleSearch}
            >
              <FaSearch className="icon" />
            </Link>
          ) : (
            <button
              type="button"
              className="btn btn--search"
              onClick={handleSearch}
            >
              <FaSearch className="icon" />
            </button>
          )}
          <SearchForm />
          <button
            type="button"
            className="btn btn--cart"
            onClick={isCartOpen ? closeCart : openCart}
          >
            <FaShoppingCart className="icon" />
            <span className="cart__quantity">{total_items}</span>
          </button>
          <button
            type="button"
            className="btn btn--toggle"
            onClick={openSidebar}
          >
            <FaBars className="icon" />
          </button>
        </div>
        <Submenu />
        <Sidebar />
        <Cart />
      </nav>
    </header>
  );
};

export default Navbar;
