import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme['background']};
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme['base-text']}
  }

  h1, h2, h3 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1rem;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`