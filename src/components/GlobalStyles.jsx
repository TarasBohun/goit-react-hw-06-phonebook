import { createGlobalStyle } from 'styled-components';
// import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-top: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #cccdce;

  display: flex;
  justify-content: center;
  text-align: center;

}
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
li {
  list-style: none;
}
ul{
  margin: 0;
  padding: 0;
}
button{
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px ;
  border: 2px solid grey;
  color: #566574;
}

h1, h2 {
  margin: 0;
  color: #566574;
}

input {
  padding: 3px;
  border-radius: 3px;
  font-size: 12px;
}
`;
