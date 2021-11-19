/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { Headline, Subheadline } from '../Styles/styleText.js';
import { StyledButton, StyledLink } from '../Styles/styleButton.js';
import homeImage from '../Assets/meditation_woman_home.png';

const Home = () => {
  return (
    <Container>
      <HomeHeadline>
        Bem vindo ao
        <span> GratiBox</span>
      </HomeHeadline>
      <HomeSubheadline>
        Receba em casa um box com chás, produtos organicos, incensos e muito
        mais...
      </HomeSubheadline>
      <ImageContainer>
        <img src={homeImage} alt="mulher meditando ao por do sol" />
        <HomeStyledButton>Quero começar</HomeStyledButton>
      </ImageContainer>
      <StyledLink>Já sou grato</StyledLink>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HomeHeadline = styled(Headline)`
  margin: 53px 0 44px 0;
`;

const HomeSubheadline = styled(Subheadline)`
  margin: 0 10px 0 10px;
  text-align: center;
`;

const HomeStyledButton = styled(StyledButton)`
  width: 202px;
  height: 45px;
  margin-bottom: 15px;
  position: absolute;
`;

const ImageContainer = styled.div`
  position: relative;
  display: inherit;
  justify-content: center;
  align-items: end;
`;
