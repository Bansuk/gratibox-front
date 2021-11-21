// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

function userPersistance(token) {
  const persistance = JSON.stringify(token);
  localStorage.setItem('user', persistance);
}

function decodeToken(token) {
  const decoded = jwt_decode(token);
  const userName = decoded.name.includes(' ')
    ? decoded.name.substr(0, decoded.name.indexOf(' '))
    : decoded.name;
  return {
    userId: decoded.id,
    userName,
    userHasSubscription: decoded.hasSubscription,
  };
}

function configToken(token) {
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
}

export { userPersistance, decodeToken, configToken };
