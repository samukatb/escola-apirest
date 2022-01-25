import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Page404 from '../pages/Page404';
import Professores from '../pages/Professores';

export default function Router() {
  return (
    <Switch>
      <MyRoute path="/" exact component={Alunos} isClosed={false} />
      <MyRoute path="/aluno/:id/edit" exact component={Aluno} isClosed />
      <MyRoute path="/aluno/" exact component={Aluno} isClosed />
      <MyRoute path="/fotos/:id" exact component={Fotos} isClosed />
      <MyRoute path="/professores/" exact component={Professores} isClosed />
      <MyRoute path="/login" exact component={Login} isClosed={false} />
      <MyRoute path="/register" exact component={Register} isClosed={false} />
      <MyRoute component={Page404} />
    </Switch>
  );
}
