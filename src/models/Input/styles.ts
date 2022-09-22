import styled, { css } from "styled-components";

interface ThemeProps {
  isSubmit?: boolean;
}

const submitTheme = {
  color: "#ffff",
  backgroundColor: "#FA8E10",
  border: "none",
};
const defaultTheme = {
  color: "var(--chumbo)",
  backgroundColor: "var(--off-white)",
};

export const LabelField = styled.label`
  display: block;
  color: var(--dark-gray);
  font-weight: 400;
  font-size: 1.25rem;
  margin-bottom: 0.2rem;
`;

export const Field = styled.input<ThemeProps>`
  width: 100%;
  padding: 1rem;
  background-color: var(--off-white);
  color: var(--chumbo);
  border: solid 1px var(--light-gray);
  border-radius: 4px;
  outline-offset: 100px;
  box-shadow: 0 0 4px 1px var(--gray);
  margin-bottom: 1rem;

  ::placeholder {
    margin-left: 2rem;
    text-align: justify;
    //padding: 0 0 0 10px;
  }

  ${({ isSubmit }) => (isSubmit ? submitTheme : defaultTheme)}
`;
