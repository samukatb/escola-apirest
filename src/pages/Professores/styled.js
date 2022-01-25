import styled from 'styled-components';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #008a87;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;

  thead {
    font-size: 18px;
  }

  tbody {
    font-size: 16px;
  }
`;
