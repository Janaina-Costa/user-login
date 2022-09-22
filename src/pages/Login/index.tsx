import { Input } from "../../models/Input";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { Paragraph } from "../../shared/Paragraph";
import { Link } from "../../shared/Links";
import { Footer } from "../../shared/Footer";
import { memo, useCallback, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

interface IProps {
  email: string;
  password?: string;
}

const Login = () => {
  const { handleSubmit } = useForm();
  
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");

  const { signIn } = useContext(AuthContext);

  const onSubmit = useCallback(async () => {
    await signIn({ email: emailUser, password: passwordUser });
  }, [emailUser, passwordUser]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.TitleForm>Entrar</S.TitleForm>
        <Paragraph text="Preencha seus dados e faça seu login" />
        <Input
          type="text"
          labelField="E-mail"
          name="email"
          onchange={(e) => setEmailUser(e.target.value)}
          placeholder="Digite seu e-mail"
          value={emailUser}
        />

        <Input
          type="password"
          labelField="Senha"
          name="Senha"
          onchange={(e) => setPasswordUser(e.target.value)}
          placeholder="Digite dua senha"
          value={passwordUser}
        />
        <Link href="#" text="Esqueci minha senha" />
        <Input type="submit" name="Entrar" value="Entrar" isSub={true} />
        <Footer>
          <Paragraph text="Ainda não tem uma conta?" />
          <Link href="#" text="Crie uma conta agora" />
        </Footer>
      </S.Container>
    </form>
  );
};

export default memo(Login);
