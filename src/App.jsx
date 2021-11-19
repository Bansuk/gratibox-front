/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import GlobalStyle from './Styles/styleGlobal';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Switch>
        <Route path="/sign-in" exact component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
