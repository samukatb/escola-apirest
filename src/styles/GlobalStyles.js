import styled, { createGlobalStyle } from 'styled-components';
import * as Color from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    color: #FFF;
    background-color: #000e15;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${Color.primaryColor};
    color: #fff;
    font-weight: 700;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    transition: all 250ms ease-in-out;

    &:hover {
      filter: brightness(85%);
    }
  }

  a {
    text-decoration: none;
    color: ${Color.primaryColor};;
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 600px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.37);
  margin: 30px auto;
  padding: 30px;
  border-radius: 5px;
`;
