import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;

  div {
    position: absolute;
    width: 102%;
    height: 102%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 3px;
  }

  span {
    z-index: 2;
  }
`;
