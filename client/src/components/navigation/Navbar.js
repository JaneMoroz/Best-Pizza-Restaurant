import React from "react";
import { FaShoppingCart, FaBars, FaSearch } from "../../utils/icons";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import Cart from "../cart/Cart";
import SearchForm from "./SearchForm";
import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import { useNavContext } from "../../context/nav_context";

const Navbar = () => {
  const { pathname } = useLocation();
  const {
    openSidebar,
    openSubmenu,
    closeSubmenu,
    isSearchOpen,
    openSearch,
    closeSearch,
  } = useNavContext();
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
        <ul className="nav__links" onMouseOver={handleSubmenu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button
              className="link-btn btn"
              type="button"
              onMouseOver={displaySubmenu}
              data-testid="nav-link-1"
            >
              Menu
            </button>
          </li>
          <li>
            <button
              className="link-btn btn"
              type="button"
              onMouseOver={displaySubmenu}
              data-testid="nav-link-2"
            >
              Locations
            </button>
          </li>
          <li>
            <button
              className="link-btn btn"
              type="button"
              onMouseOver={displaySubmenu}
              data-testid="nav-link-3"
            >
              About
            </button>
          </li>
          <li>
            <button
              className="link-btn btn"
              type="button"
              onMouseOver={displaySubmenu}
              data-testid="nav-link-4"
            >
              Franchising
            </button>
          </li>
        </ul>
        <div className="nav__btns" onMouseOver={handleSubmenu}>
          {pathname !== "/" ? (
            <Link
              to={"/"}
              type="button"
              className="btn btn--search"
              onClick={handleSearch}
              data-testid="search-btn"
              aria-label="search"
            >
              <FaSearch className="icon" />
            </Link>
          ) : (
            <button
              type="button"
              className="btn btn--search"
              onClick={handleSearch}
              data-testid="search-btn"
              aria-label="search"
            >
              <FaSearch className="icon" />
            </button>
          )}
          <SearchForm />
          <button
            type="button"
            className="btn btn--cart"
            onClick={isCartOpen ? closeCart : openCart}
            data-testid="cart-btn"
            aria-label="shopping cart"
          >
            <FaShoppingCart className="icon" />
            <span className="cart__quantity">{total_items}</span>
          </button>
          <button
            type="button"
            className="btn btn--toggle"
            data-testid="nav-toggle-btn"
            onClick={openSidebar}
            aria-label="navigation menu"
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
