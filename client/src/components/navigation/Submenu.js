import React, { useState, useRef, useEffect } from "react";
import { useMenuContext } from "../../context/menu_context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    submenuLocation,
    page: { links },
  } = useMenuContext();

  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = submenuLocation;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 2) {
      setColumns("");
    }

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 6) {
      setColumns("col-4");
    }
  }, [submenuLocation, links]);

  return (
    <aside
      data-testid="submenu"
      className={`submenu ${isSubmenuOpen ? "show" : ""}`}
      ref={container}
    >
      <div className="submenu__el">
        <nav className={`submenu__list ${columns}`}>
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
      </div>
    </aside>
  );
};

export default Submenu;
