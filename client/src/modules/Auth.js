import React from 'react';

const Auth = {
  // authenticateUser: (token) => {
  //   console.log(token);
  //   localStorage.setItem('token', token);
  // },
  getToken: () => localStorage.getItem('token'),
  isUserAuthenticated: () => localStorage.getItem('token') === null,
  deauthenticateUser: () => {
    console.log("removingItem")
    localStorage.removeItem('token');
    localStorage.removeItem('usrname');
  },
};

export default Auth;
