import React, { Attributes, ReactElement } from "react";
import * as S from "./styles";

interface IProps {
  type: string;
  value: string|number|undefined;
  name?: string;
  labelField?: string;
  isSub?: boolean;
  icon?: string;
  placeholder?: string;
 onchange?:(event: any) => void;
}

export const Input = ({
  type,
  name,
  labelField,
  placeholder,
  value,
  isSub,
  icon,
  onchange,
}: IProps) => {
  return (
    <>
      <S.LabelField htmlFor={name}>{labelField}</S.LabelField>
      <S.Field
        type={type}
        name={name}
        onChange={onchange}
        placeholder={placeholder}
        value={value}
        isSubmit={isSub}
        src={icon}
        
      />
    </>
  );
};
