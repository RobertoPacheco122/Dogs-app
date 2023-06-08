import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <div className="">
          <Link to="/">
            <img src="src/assets/img/icons/dogs.svg" alt="Logo da Dogs" />
          </Link>
        </div>
        <div className={styles.containerContent}>
          <Link to="/login" className={`${styles.linkContainer} link`}>
            <span>Login / Cadastrar</span>
            <i className={`${styles.iconUser} icon icon--user`}></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
