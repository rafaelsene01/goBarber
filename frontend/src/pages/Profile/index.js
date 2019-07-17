import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" placeholder="Seu endereco de E-mail" />

        <br />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="password"
          type="password"
          placeholder="Conformacao de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
    </Container>
  );
}
