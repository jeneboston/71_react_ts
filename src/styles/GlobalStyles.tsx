import { Global, css } from "@emotion/react";

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: "Lato", sans-serif;
  }
`;

function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyles;