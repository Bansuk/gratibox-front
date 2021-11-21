/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../Styles/styleOverall';

const PlanCard = function card({ plan }) {
  return (
    <CardContainer>
      <img src={plan.image} alt={plan.image_alt} />
      <span>{plan.description}</span>
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
  margin-bottom: 30px;
  width: 95vw;
  height: 400px;

  & img {
    width: 300px;
    height: 225px;
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
