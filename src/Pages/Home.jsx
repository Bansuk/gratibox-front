import React from 'react';
import { useHistory } from 'react-router-dom';
import homeImage from '../Assets/meditation_woman_home.png';
import {
  HomeContainer,
  HomeHeadline,
  HomeSubheadline,
  HomeImage,
  HomeStyledButton,
  ImageContainer,
  HomeBottomBackground,
} from '../Styles/styleHome';
import { StyledLink } from '../Styles/styleOverall';

const Home = function Home() {
  const history = useHistory();

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
        <HomeStyledButton onClick={() => history.push('/sign-up')}>
          Quero começar
        </HomeStyledButton>
      </ImageContainer>
      <HomeBottomBackground>
        <StyledLink onClick={() => history.push('/sign-in')}>
          Já sou grato
        </StyledLink>
      </HomeBottomBackground>
    </HomeContainer>
  );
};

export default Home;
