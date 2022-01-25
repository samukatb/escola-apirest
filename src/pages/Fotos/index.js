/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Fotos({ match }) {
  const dispatch = useDispatch();

  const id = get(match, 'params.id', '');

  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(get(data, 'Fotos[0].url', ''));
        setIsLoading(false);
      } catch {
        toast.error('Erro ao obter imagem, tente novamente mais tarde!');
        setIsLoading(false);
        history.push('/');
      }
    };
    getData();
  }, []);

  const handleChange = async (e) => {
    const fotoFile = e.target.files[0];
    const fotoURL = URL.createObjectURL(fotoFile);
    setFoto(fotoURL);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', fotoFile);

    try {
      setIsLoading(true);
      setIsLoading(false);

      await axios.post('/fotos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Foto alterada com sucesso');
    } catch (err) {
      setIsLoading(false);
      toast.error('Ocorreu um erro ao alterar sua foto!');

      const { status } = get(err, 'response', '');
      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>

      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="Foto" /> : 'Selecionar foto'}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>

      <Title>Formatos permitidos: .png, .jpeg</Title>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
