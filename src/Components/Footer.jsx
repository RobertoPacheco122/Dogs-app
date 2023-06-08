import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <img
          src="src/assets/img/icons/dogs.svg"
          alt="Logo da Dogs"
          className={styles.dogsLogo}
        />
        <span>Dogs. Todos direitos reservados</span>
      </div>
    </footer>
  );
};

export default Footer;
