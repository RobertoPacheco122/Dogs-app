import React from "react";
import styles from "./Login.module.css";

const LoginPasswordRecover = () => {
  const [emailOrUser, setEmailOrUser] = React.useState("");

  return (
    <main className={`${styles.main} animeLeft`}>
      <div className={`container`}>
        <h1 className={styles.title}>Cadastre-se</h1>
        <form>
          <div className={styles.containerInput}>
            <label className={styles.label} htmlFor="userName">
              E-mail / Usuário
            </label>
            <input
              className={styles.inputPassword}
              type="text"
              name="userName"
              id="userName"
              onChange={({ target }) => {
                setEmailOrUser(target.value);
              }}
            />
          </div>
          <button className={styles.button}>Cadastrar</button>
        </form>
      </div>
    </main>
  );
};

export default LoginPasswordRecover;
