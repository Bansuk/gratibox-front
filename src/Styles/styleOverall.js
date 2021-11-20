import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #8c97ea;
  border-radius: 10px;
  font-weight: 700;
`;

const StyledLink = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

const Headline = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin-top: 100px;

  & span {
    font-weight: 700;
  }
`;

const Subheadline = styled.h2`
  font-size: 18px;
  font-weight: 300;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;

  & input {
    background-color: #fff;
    border: 1px solid #604848;
    border-radius: 10px;
    height: 64px;
    margin-bottom: 8px;
    width: 85vw;
    color: rgba(96, 72, 72, 0.4);
    font-size: 24px;
    padding-left: 17px;
  }

  & ::placeholder {
    font-size: 24px;
    font-weight: 500;
    color: rgba(96, 72, 72, 0.4);
  }

  & :focus {
    border: 1px solid black;
    outline: none;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export {
  StyledButton, StyledLink, Headline, Subheadline, Form,
};
