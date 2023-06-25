import React from "react";
import styles from "./Login.module.css";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";

const LoginPasswordRecover = () => {
  const [emailOrUser, setEmailOrUser] = React.useState("");

  return (
    <main className={`${styles.main} animeLeft`}>
      <div className={`container`}>
        <h1 className={styles.title}>Recuperar senha</h1>
        <form>
          <Input
            labelName="E-mail / Usuário"
            name="username"
            type="text"
            onChange={({ target }) => {
              setEmailOrUser(target.value);
            }}
          />
          <Button>Recuperar</Button>
        </form>
      </div>
    </main>
  );
};

export default LoginPasswordRecover;
