import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`body {
  margin: 0;
  color: #212121;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
    background: linear-gradient(
      180deg,
      rgba(174, 217, 238, 0.6616072454372374) 0%,
      rgba(143, 126, 176, 0.6504027636445203) 100%
    )
    no-repeat;
  background-size: auto 100%;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


h1, h2, p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a{
  text-decoration: none;
}

`;
