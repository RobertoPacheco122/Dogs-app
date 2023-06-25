import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";

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
              <Input
                labelName="Usuário"
                name="username"
                type="text"
                onChange={({ target }) => setUser(target.value)}
              />
              <Input
                labelName="Senha"
                name="password"
                type="password"
                onChange={({ target }) => setPassword(target.value)}
              />
              <Button>Entrar</Button>
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
            <Link className="button link" to="/login/cadastrar">
              Cadastro
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};
