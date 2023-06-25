import React from "react";
import styles from "./Login.module.css";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";

const LoginPasswordRegister = () => {
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <main className={`${styles.main} animeLeft`}>
      <div className={`container`}>
        <h1 className={styles.title}>Cadastre-se</h1>
        <form>
          <Input
            labelName="Usuário"
            name="username"
            type="text"
            onChange={({ target }) => {
              setUser(target.value);
            }}
          />
          <Input
            labelName="E-mail"
            name="email"
            type="email"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
          <Input
            labelName="Senha"
            name="password"
            type="password"
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
          <Button>Cadarstar</Button>
        </form>
      </div>
    </main>
  );
};

export default LoginPasswordRegister;
