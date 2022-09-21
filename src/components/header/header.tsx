import React from "react";
import styles from "./header.module.css";

const NAV_LIST: string[] = ["О комплексе", "Блог", "FAQ", "Контакты"];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.blokOpenMenu}>
        <img
          src={require("../../images/open.png")}
          alt="open"
          className={styles.open}
        />
      </div>
      <nav>
        <ul className={`${styles.navList} ${styles.border}`}>
          {NAV_LIST.map((el: string) => {
            return <li className={styles.navLink}>{el.toUpperCase()}</li>;
          })}
        </ul>
      </nav>
    </header>
  );
};
