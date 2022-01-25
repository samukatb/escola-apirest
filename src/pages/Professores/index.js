/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture, Table } from './styled';
import axios from '../../services/axios';

import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await axios.get('/users/');
        setAlunos(response.data);
        setIsLoading(false);
      } catch {
        toast.error('Ocorreu um erro, tente novamente mais tarde');
      }
    }
    getData();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Professores</h1>

      <AlunoContainer>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((professor) => (
              <tr key={professor.id}>
                <td>{professor.id}</td>
                <td>{professor.nome}</td>
                <td>{professor.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </AlunoContainer>
    </Container>
  );
}
