/* eslint-disable no-unused-vars */
import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaUserPlus,
  FaUserEdit,
  FaSignOutAlt,
  FaUserGraduate,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import * as C from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
    toast.success('Você fez logout com sucesso!');
  };

  return (
    <C.Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      {isLoggedIn ? (
        <Link to="/register">
          <FaUserEdit size={24} />
        </Link>
      ) : (
        <Link to="/register">
          <FaUserPlus size={24} />
        </Link>
      )}
      {isLoggedIn ? (
        <Link to="/professores">
          <FaUserGraduate size={24} />
        </Link>
      ) : (
        ''
      )}
      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaSignOutAlt size={24} />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
      )}
      {isLoggedIn && <FaCircle size={24} color="#4ec76e" />}
    </C.Nav>
  );
}
