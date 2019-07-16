import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" exact component={SingUp} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
