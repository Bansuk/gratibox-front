import { signUpSchema, signInSchema } from '../Validation/Schemes';

function validateUserInput(body, page) {
  let isInputInvalid;
  if (page === 'sign-up') {
    isInputInvalid = signUpSchema.validate(body).error;
  } else {
    isInputInvalid = signInSchema.validate(body).error;
  }

  const errorMessage = isInputInvalid && JSON.stringify(isInputInvalid.details[0].message);

  if (errorMessage?.includes('name')) {
    alert('Formato de nome errado! O nome deve ter entre 2 e 50 caracteres e não deve conter números ou caracteres especiais, apenas letras!');
  } else if (errorMessage?.includes('email')) {
    alert('Formato de email errado! Por favor, insira um email válido!');
  } else if (errorMessage?.includes('passwordConfirmation')) {
    alert('Senhas divergentes!');
  }

  return isInputInvalid;
}

export default validateUserInput;
