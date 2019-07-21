import React from 'react';
import { Text } from 'react-native';

import Backgound from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';
// import { Container } from './styles';

export default function SignIn() {
  return (
    <Backgound>
      <Text>aaa</Text>
      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu nome"
      />
      <Button>Entrar</Button>
    </Backgound>
  );
}
