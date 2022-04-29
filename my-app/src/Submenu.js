import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { links },
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length == 2) {
      setColumns("");
    }

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 6) {
      setColumns("col-4");
    }
  }, [location, links]);

  return (
    <aside className={`submenu ${isSubmenuOpen ? "show" : ""}`} ref={container}>
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
