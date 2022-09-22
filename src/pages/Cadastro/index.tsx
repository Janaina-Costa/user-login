import { Input } from "../../models/Input";
import axios from "axios";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { Paragraph } from "../../shared/Paragraph";
import { Link } from "../../shared/Links";
import { Footer } from "../../shared/Footer";
import { useEffect, useState } from "react";

interface IProps {
  email: string;
  password?: string;
}
// alterar
export const Cadastro = () => {
  const [emailUser, setEmailUser] = useState();
  const [passwordUser, setPasswordUser] = useState();

  const url = "http://localhost:5000/signin";
  useEffect(() => {
    axios
      .post(url)
      .then((response) => response.data)
      .then((data) => {
        return data
      });
  }, []);

  const { handleSubmit } = useForm();

  const onSubmit = (e: any) => {
    alert( emailUser);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.TitleForm>Entrar</S.TitleForm>
        <Paragraph text="Preencha seus dados e faça seu login" />
        <Input
          type="text"
          labelField="Nome"
          name="nome"
          onchange={(e) => setEmailUser(e.target.value)}
          placeholder="Digite seu nome e sobrenome"
          value={emailUser}
        />

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
