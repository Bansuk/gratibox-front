import axios from 'axios';

const URL = 'http://localhost:4000';

function signUpUser(body) {
  return axios.post(`${URL}sign-up`, body);
}

function signInUser(body) {
  return axios.post(`${URL}sign-in`, body);
}

export { signUpUser, signInUser };
