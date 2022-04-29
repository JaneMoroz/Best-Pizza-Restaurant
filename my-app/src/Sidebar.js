import React from "react";
import { FaTimes } from "react-icons/fa";
import { sublinks } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen ? "show" : ""}`}>
      <div className="sidebar">
        <button type="button" className="btn btn--close" onClick={closeSidebar}>
          <FaTimes className="icon" />
        </button>
        <div className="sidebar__list">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index} className="sidebar__el">
                <h2>{page}</h2>
                <nav
                  className={`submenu__list ${links.length > 4 ? "col-2" : ""}`}
                >
                  {links.map((link, index) => {
                    const { label, icon, url } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </nav>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
