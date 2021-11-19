/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import homeImage from '../Assets/meditation_woman_home.png';
import {
  HomeContainer,
  HomeHeadline,
  HomeSubheadline,
  HomeImage,
  HomeStyledButton,
  ImageContainer,
} from '../Styles/styleHome';
import { StyledLink } from '../Styles/styleButton.js';

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeadline>
        Bem vindo ao
        <span> GratiBox</span>
      </HomeHeadline>
      <HomeSubheadline>
        Receba em casa um box com chás, produtos organicos, incensos e muito
        mais...
      </HomeSubheadline>
      <ImageContainer>
        <HomeImage src={homeImage} alt="pessoa meditando ao por do sol" />
        <HomeStyledButton>Quero começar</HomeStyledButton>
      </ImageContainer>
      <StyledLink>Já sou grato</StyledLink>
    </HomeContainer>
  );
};

export default Home;
