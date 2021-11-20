function userPersistance(token) {
  const persistance = JSON.stringify(token);
  localStorage.setItem('user', persistance);
}

export default userPersistance;
