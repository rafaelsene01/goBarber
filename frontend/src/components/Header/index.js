import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-purple.svg';

import Nortifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Nortifications />
          <Profile>
            <div>
              <strong>Teste</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Teste"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}