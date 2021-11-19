import styled from 'styled-components';

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
export { Form };
