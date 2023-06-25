import React from "react";
import styles from "./Input.module.css";

const Input = ({ labelName, type, name, ...props }) => {
  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {labelName}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
        {...props}
      />
    </div>
  );
};

export default Input;
