import React from "react";
import styles from "./MenuToggle.module.css";

function MenuToggle({ isOpen, toggle }) {
  return (
    <button
      className={styles.menuToggle}
      onClick={toggle}
      aria-label="Toggle menu"
    >
      <span className={`${styles.bar} ${isOpen ? styles.bar1Open : ""}`}></span>
      <span className={`${styles.bar} ${isOpen ? styles.bar2Open : ""}`}></span>
      <span className={`${styles.bar} ${isOpen ? styles.bar3Open : ""}`}></span>
    </button>
  );
}

export default MenuToggle;
