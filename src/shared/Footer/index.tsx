import { ReactNode } from "react";
import * as S from "./styles";

interface IPropos {
  children: ReactNode;
}

export const Footer = ({children}:IPropos) => {
  return <S.Container>{children}</S.Container>;
};
