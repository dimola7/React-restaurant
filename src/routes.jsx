import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import OrderPage from './components/OrderPage';
import GlobalStyle from './components/GlobalStyle';
import LoginPage from './components/LoginPage';
import signupPage from './components/signupPage';
import Navbar from './components/Navbar';
import Basket from './components/Basket';
import Feedback from './components/Feedback';


const Routes = () => (
  <Router>
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/meal/:id" component={OrderPage}></Route>
        <Route path="/signin" component={LoginPage}></Route>
        <Route path="/signup" component={signupPage}></Route>
        <Route path="/navbar" component={Navbar}></Route>
        <Route path="/basket" component={Basket}></Route>
        <Route path="/feedback" component={Feedback}></Route>
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
