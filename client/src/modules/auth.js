import React from "react";
import axios from "axios";

const Auth = {
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
        this.setState({ userData: res.data.user });
      })
      .catch(err => {
        this.setState({ token: "" });
      });
  }
};

export default Auth;
