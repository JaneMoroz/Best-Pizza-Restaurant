import React from "react";
import { FaTimes } from "../../utils/icons";
import { sublinks } from "../../assets/data/data";
import { useNavContext } from "../../context/nav_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useNavContext();
  return (
    <aside
      className={`sidebar-wrapper ${isSidebarOpen ? "show" : ""}`}
      data-testid="sidebar"
    >
      <div className="sidebar">
        <button
          aria-label="close"
          type="button"
          className="btn btn--close"
          onClick={closeSidebar}
          data-testid="close-sidebar-btn"
        >
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
