/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { Headline } from '../Styles/styleText';
import { Form } from '../Styles/styleForm.js';
import { StyledButton } from '../Styles/styleButton';

const SignUp = () => {
  return (
    <>
      <SignUpHeadline>
        Bem vindo ao
        <span> GratiBox</span>
      </SignUpHeadline>
      <Form>
        <input type="text" placeholder="Nome" maxLength="50" required />
        <input type="email" placeholder="Email" maxLength="255" required />
        <input
          type="password"
          placeholder="Senha"
          minLength="8"
          maxLength="64"
          required
        />
        <input
          type="password"
          placeholder="Confirmar senha"
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
