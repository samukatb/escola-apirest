import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as Colors from '../../config/colors';

// eslint-disable-next-line import/prefer-default-export
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

export const NovoAluno = styled(Link)`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  background-color: ${Colors.primaryColor};
  padding: 3px;
  border-radius: 5px;
  color: #fff;

  &:hover {
    filter: brightness(85%);
  }
`;
