import axios from 'axios';
import { configToken } from '../Helpers/TokenHandler';

const URL = 'http://localhost:4000/';

function signUpUser(body) {
  return axios.post(`${URL}sign-up`, body);
}

function signInUser(body) {
  return axios.post(`${URL}sign-in`, body);
}

function getPlans(token) {
  return axios.get(`${URL}plans`, configToken(token));
}

export { signUpUser, signInUser, getPlans };
