/* eslint-disable array-callback-return */
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Headline, Subheadline } from '../Styles/styleOverall';
import PlanCard from '../Components/PlanCard';
import { getPlans } from '../Services/api.services';
import UserContext from '../Contexts/UserContext';
import { decodeToken } from '../Helpers/TokenHandler';

const Plans = function plans() {
  const token = useContext(UserContext);
  const { userName } = decodeToken(token);
  const [allPlans, setAllPlans] = useState([]);

  useEffect(() => {
    getPlans(token)
      .then((res) => setAllPlans(res.data))
      .catch((err) => {
        if (err.response?.status === 401) alert('Não autorizado!');
        else alert('Houve um erro ao carregar os planos! Por favor, tente novamente!');
      });
  });

  return (
    <PlansContainer>
      <PlansHeadline>
        Bom te ver por aqui, @
        {userName}
        .
      </PlansHeadline>
      <PlansSubheadline>
        Você ainda não assinou um plano, que tal começar agora?
      </PlansSubheadline>
      {allPlans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
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
  margin-bottom: 30px;
`;
