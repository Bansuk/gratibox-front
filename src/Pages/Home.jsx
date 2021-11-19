/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Headline, Subheadline } from '../Styles/styleText.js';

const Home = () => {
  return (
    <>
      <Headline>
        Bem vindo ao
        <span> GratiBox</span>
      </Headline>
      <Subheadline>
        Receba em casa um box com chás, produtos organicos, incensos e muito
        mais...
      </Subheadline>
    </>
  );
};

export default Home;
