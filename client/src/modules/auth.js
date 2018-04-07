import React from "react";
import axios from "axios";

const Auth = {
  // authenticateUser: (token) => {
  //   console.log(token);
  //   localStorage.setItem('token', token);
  // },
  getToken: () => localStorage.getItem("token"),
  isUserAuthenticated: () => localStorage.getItem("token") === null,
  deauthenticateUser: () => {
    console.log("removingItem");
    localStorage.removeItem("token");
    localStorage.removeItem("usrname");
  },
  changePass: () => {
    const token = Auth.getToken();
    const config = {
      headers: {
        Authorization: `bearer ${Auth.getToken()}`,
        'x-access-token': Auth.getToken(),
      },
      token,
    }
    axios
      .post("/profile/changepass", config)
      .then((res, req) => {
        console.log("res.data");
        console.log(res.data);
        this.setState({ userData: res.data.user });
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
        this.setState({ token: "" });
      });
  }
};

export default Auth;
