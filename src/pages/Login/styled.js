import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Paragrafo = styled.p``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    margin-bottom: 20px;
    height: 30px;
    font-size: 16px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid black;
    transition: all 100ms ease-in-out;
    background: none;
    color: #fff;

    &:focus {
      border: none;
      box-shadow: 0px 0px 10px #007ac4;
      padding: 10px;
      height: 40px;
    }
  }
`;
