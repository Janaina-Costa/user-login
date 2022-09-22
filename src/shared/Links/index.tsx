import * as S from "./styles";

interface IProps {
  text: string;
  href: string;
}

export const Link = ({ text, href }: IProps) => {
  return (
    <S.Container>
      <S.Wrapper href={href}>{text}</S.Wrapper>
    </S.Container>
  );
};
