import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SinglePage from './components/SinglePage';
import LoginPage from './components/LoginPage';
import GlobalStyle from './components/GlobalStyle';

const Routes = () => (
  <Router>
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/meal/:id" component={SinglePage}></Route>
        <Route path="/SignIn/:id" components={LoginPage}></Route>
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
