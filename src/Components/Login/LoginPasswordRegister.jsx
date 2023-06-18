import React from "react";
import styles from "./Login.module.css";

const LoginPasswordRegister = () => {
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <main className={`${styles.main} animeLeft`}>
      <div className={`container`}>
        <h1 className={styles.title}>Cadastre-se</h1>
        <form>
          <div className={styles.containerInput}>
            <label className={styles.label} htmlFor="userName">
              Usuário
            </label>
            <input
              className={styles.inputPassword}
              type="text"
              name="userName"
              id="userName"
              onChange={({ target }) => {
                setUser(target.value);
              }}
            />
          </div>
          <div className={styles.containerInput}>
            <label className={styles.label} htmlFor="userEmail">
              E-mail
            </label>
            <input
              className={styles.inputPassword}
              type="email"
              name="userName"
              id="userName"
              onChange={({ target }) => {
                setEmail(target.value);
              }}
            />
          </div>
          <div className={styles.containerInput}>
            <label className={styles.label} htmlFor="userPassword">
              Senha
            </label>
            <input
              className={styles.inputPassword}
              type="password"
              name="userPassword"
              id="userPassword"
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
          </div>
          <button className={styles.button}>Cadastrar</button>
        </form>
      </div>
    </main>
  );
};

export default LoginPasswordRegister;
