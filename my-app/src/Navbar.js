import React from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import Cart from "./Cart";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

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
  };

  return (
    <header className="container">
      <nav className="nav">
        <a href="#" className="logo">
          Best Pizza
        </a>
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
        <div className="nav__btns">
          <button type="button" className="btn btn--cart">
            <FaShoppingCart className="icon" />
            <span className="cart__quantity">0</span>
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
