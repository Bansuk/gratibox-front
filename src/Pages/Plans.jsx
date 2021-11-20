import React from 'react';
import styled from 'styled-components';
import { Headline, Subheadline } from '../Styles/styleOverall';
import PlanCard from '../Components/PlanCard';

const Plans = function plans() {
  return (
    <PlansContainer>
      <PlansHeadline>Bom te ver por aqui, @User.</PlansHeadline>
      <PlansSubheadline>
        Você ainda não assinou um plano, que tal começar agora?
      </PlansSubheadline>
      <PlanCard />
    </PlansContainer>
  );
};
export default Plans;

const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlansHeadline = styled(Headline)`
  font-weight: 700;
`;

const PlansSubheadline = styled(Subheadline)`
  margin-top: 22px;
  padding-left: 8px;
`;
