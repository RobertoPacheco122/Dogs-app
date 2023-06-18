import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <main className={`${styles.main} animeLeft`}>
      <div className={`${styles.container} container`}>
        <div className={styles.containerImage}>
          <img src="src/assets/img/login.jpg" alt="" />
        </div>
        <div className={styles.containerContent}>
          <section className={styles.loginSection}>
            <h1 className={styles.title}>Login</h1>
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
                  onChange={({ target }) => setUser(target.value)}
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
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>
              <button className={styles.button}>Entrar</button>
            </form>
            <Link className={`link ${styles.link}`} to="/login/recuperar">
              Perdeu a senha? Clique aqui.
            </Link>
          </section>
          <section className={styles.registerSection}>
            <h1 className={styles.title}>Cadastre-se</h1>
            <p className={styles.text}>
              Ainda não possui conta? Cadastre-se no site.
            </p>
            <Link className={`${styles.button} link`} to="/login/cadastrar">
              Cadastro
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};
