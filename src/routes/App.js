import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/containers/Home.jsx';
import Login from '../pages/login/containers/Login.jsx'
import Register from '../pages/register/containers/Register.jsx'
import Layout from '../assets/templates/Layout.jsx';
import Player from '../pages/player/Player.jsx';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/player/:id" component={Player} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;