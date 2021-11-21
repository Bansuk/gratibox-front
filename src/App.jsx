/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import GlobalStyle from './Styles/styleGlobal';
import UserContext from './Contexts/UserContext';
import Plans from './Pages/Plans';

const App = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    let loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      loggedInUser = JSON.parse(loggedInUser);
      setUser(loggedInUser);
    }
  }, []);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        <Switch>
          <Route path="/sign-in" exact>
            <SignIn setUser={setUser} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/plans" exact component={Plans} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
