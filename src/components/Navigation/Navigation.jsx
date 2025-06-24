import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useState } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className={styles.navbar}>
        <NavLink to="/" className="logo">
          <img src="/logo.png" alt="TravelTrucks logo" />
        </NavLink>

        {/* Menü Butonu */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Menü */}
        <ul
          className={
            menuOpen ? styles.navListMobileVisible : styles.navList
          }
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.activeLink : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.activeLink : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
