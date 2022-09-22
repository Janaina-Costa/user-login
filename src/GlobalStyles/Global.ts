import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --off-white: #FDFDFD;
        --light-gray:#EFEEF6;
        --dark-gray:#605B5B;
        --gray:#B6B7B9;
        --chumbo:#434845;
        --light-chumbo:#647874;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button{
        font-family: 'Poppins', sans-serif;

    }
    input{
        outline: none;
    }
    ul,  a{
        text-decoration: none;
        list-style: none;
    }
`;
