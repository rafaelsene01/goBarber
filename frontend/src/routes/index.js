import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" exact component={SingUp} />

      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  );
}
