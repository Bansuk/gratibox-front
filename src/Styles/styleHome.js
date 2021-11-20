import styled from 'styled-components';
import { Headline, Subheadline, StyledButton } from './styleOverall';

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
  font-size: 18px;
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

const HomeBottomBackground = styled.div`
  text-align: center;
  background-color: #4d65a8;
  width: 100%;
  height: 15.2vh;
  margin-top: -1px;

  & span {
    background-color: #4d65a8;
  }
`;

export {
  HomeContainer,
  HomeHeadline,
  HomeSubheadline,
  HomeImage,
  HomeStyledButton,
  ImageContainer,
  HomeBottomBackground,
};
