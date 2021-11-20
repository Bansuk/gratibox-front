/* eslint-disable react/jsx-no-bind */
// eslint-disable-next-line react/jsx-no-bind
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  Headline,
  StyledButton,
  Form,
  StyledLink,
} from '../Styles/styleOverall';
import { signInUser } from '../Services/api.services';
import validateUserInput from '../Helpers/Validation';
import userPersistance from '../Helpers/User';

// eslint-disable-next-line react/prop-types
const SignIn = function signIn({ setUser }) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const body = {
      email,
      password,
    };

    if (validateUserInput(body, 'sign-in')) return;

    signInUser(body)
      .then((res) => {
        const { token } = res.data;
        setUser(token);
        userPersistance(token);
        history.push('/');
      })
      .catch((err) => alert(`Houve um erro ao realizar o login! Por favor, tente novamente!', ${err}`));
  }

  return (
    <>
      <SignInHeadline>
        Bem vindo ao
        <span> GratiBox</span>
      </SignInHeadline>
      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength="255"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="8"
          maxLength="64"
          required
        />
        <SignInButton>Login</SignInButton>
        <SignInLink onClick={() => history.push('/sign-up')}>Ainda não sou grato</SignInLink>
      </Form>
    </>
  );
};

export default SignIn;

const SignInHeadline = styled(Headline)`
  text-align: center;
  margin-bottom: 43px;
`;

const SignInButton = styled(StyledButton)`
  font-size: 36px;
  margin-top: 144px;
  height: 56px;
  width: 70vw;
`;

const SignInLink = styled(StyledLink)`
  margin-top: 15px;
`;
