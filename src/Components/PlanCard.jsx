import React from 'react';
import styled from 'styled-components';
import planImage from '../Assets/istockphoto-1201318093-170667a 1.png';
import { StyledButton } from '../Styles/styleOverall';

const PlanCard = function card() {
  return (
    <CardContainer>
      <img src={planImage} alt="a" />
      <span>
        Você recebe um box por semana. Ideal para quem quer exercer a gratidão
        todos os dias.
      </span>
      <CardStyledButtom>Assinar</CardStyledButtom>
    </CardContainer>
  );
};

export default PlanCard;

const CardContainer = styled.div`
  align-items: center;
  background-color: #e5cdb3;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 95vw;
  height: 400px;

  & img {
    width: 90%;
    background-color: #e5cdb3;
    margin-top: 2px;
  }

  & span {
    background-color: #e5cdb3;
    color: #4d65a8;
    font-weight: 700;
    font-size: 18px;
    margin-top: 21px;
    padding-left: 35px;
  }
`;

const CardStyledButtom = styled(StyledButton)`
  margin-top: 36px;
  font-size: 24px;
  font-weight: 500;
  width: 168px;
  height: 39px;
`;
