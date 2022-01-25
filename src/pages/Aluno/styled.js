import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    margin-top: 5px;
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

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 20px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #000;
  }
`;
