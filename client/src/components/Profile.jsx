import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Card, CardTitle, CardText } from "material-ui/Card";

const Profile = props => (
  <div className="container" style={{ padding: "10px" }}>
    <div className="card">
      <div className="card-header p-4">
        <h4 className="card-title">My Profile</h4>
        <h6 className="card-subtitle mb-2 text-muted">
          You.. were a Llama once!
        </h6>
      </div>
      <div className="card-body">
        <div className="card-block px-md-4">
          <div className="form-group row">
            <label className="col-4">Name</label>
            <label className="col-8">{props.userData.name}</label>
          </div>
          <div className="form-group row">
            <label className="col-4">Email</label>
            <label className="col-8">{props.userData.email}</label>
          </div>
        </div>
        {/* change pass state card */}
        {props.chgPassState ? 
       (
        <div className="card" style={{ padding: "10px" }}>
          {/* <h3 className="card-header"> Welcome back to TraveLlama </h3> */}
          <div className="card-block">
            <h2 className="card-header">Login</h2>
            <form
              action="/"
              className="form-control"
              //  onSubmit={onSubmit}
            >
              <div className="field-line">
                <TextField
                  floatingLabelText="Email"
                  name="email"
                  // errorText={errors.email}
                  // onChange={onChange}
                  // value={user.email}
                />
              </div>

              <div className="field-line">
                <TextField
                  floatingLabelText="Password"
                  type="password"
                  name="password"
                  // onChange={onChange}
                  // errorText={errors.password}
                  // value={user.password}
                />
              </div>

              <div className="button-line">
                <button
                  className="btn"
                  type="submit"
                  // disabled={!user.password || !user.email}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
)
          : 
          console.log(false)}
        

        <div className="">
          <button
            className="btn btn-warning mr-1"
            onClick={props.onChangePass.bind(this)}
          >
            Change Password
          </button>
          <button
            className="btn btn-danger"
            onClick={props.onLogOut.bind(this)}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Profile;
