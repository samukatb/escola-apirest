import styled from 'styled-components';

export const Nav = styled.nav`
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.37);

  a {
    color: #fff;
    margin: 0 10px 0;
    font-weight: bold;
  }
`;

export const Debug = styled.p``;
