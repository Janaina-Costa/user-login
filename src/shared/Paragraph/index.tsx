import * as S from "./styles";

interface IProps {
  text: string;
}

export const Paragraph = ({ text }: IProps) => {
  return (
    <S.Container>
      <S.Wrapper>{text}</S.Wrapper>
    </S.Container>
  );
};
