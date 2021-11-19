import styled from 'styled-components';
import { Headline, Subheadline } from './styleText.js';
import { StyledButton } from './styleButton.js';

const HomeContainer = styled.div`
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

const HomeImage = styled.img`
  width: 100vw;
`;

const HomeStyledButton = styled(StyledButton)`
  height: 45px;
  margin-bottom: 15px;
  position: absolute;
  width: 202px;
`;

const ImageContainer = styled.div`
  align-items: end;
  display: inherit;
  justify-content: center;
  position: relative;
`;

export {
  HomeContainer,
  HomeHeadline,
  HomeSubheadline,
  HomeImage,
  HomeStyledButton,
  ImageContainer,
};
