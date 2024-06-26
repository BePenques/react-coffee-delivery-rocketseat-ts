import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
    }

    body{
        background-color: ${(props) => props.theme['gray-10']};
        color: ${(props) => props.theme['gray-700']};
        -webkit-font-smoothing: antialiased;
    }

    border-style, input-security, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`;