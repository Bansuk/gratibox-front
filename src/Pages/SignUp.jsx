/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Headline, StyledButton, Form } from '../Styles/styleOverall';
import { signUpUser } from '../Services/api.services';
import validateUserInput from '../Helpers/Validation';

const SignUp = function signUp() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const body = {
      name,
      email,
      password,
      passwordConfirmation,
    };

    if (validateUserInput(body)) return;

    signUpUser(body)
      .then(history.push('/sign-in'))
      .catch((err) => alert(`Houve um erro ao realizar o cadastro! Por favor, tente novamente!', ${err}`));
  }

  return (
    <>
      <SignUpHeadline>
        Bem vindo ao
        <span> GratiBox</span>
      </SignUpHeadline>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="50"
          required
        />
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
        <input
          type="password"
          placeholder="Confirmar senha"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          minLength="8"
          maxLength="64"
          required
        />
        <SignUpButton>Cadastrar</SignUpButton>
      </Form>
    </>
  );
};

export default SignUp;

const SignUpHeadline = styled(Headline)`
  text-align: center;
  margin-bottom: 43px;
`;

const SignUpButton = styled(StyledButton)`
  font-size: 36px;
  margin-top: 62px;
  height: 56px;
  width: 70vw;
`;
