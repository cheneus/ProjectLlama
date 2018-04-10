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
        {props.chgPassState ? (
            <form
              action="/"
              className="form-group p-1 mb-2"
              //  onSubmit={onSubmit}
            >
              <div className="field-line">
                <TextField
                  floatingLabelText="New Password"
                  type="password"
                  name="password"
                  // errorText={errors.email}
                  onChange={props.onChange.bind(this)}
                  // value={user.email}
                />
              </div>

              <div className="field-line">
                <TextField
                  floatingLabelText="Confirm Password"
                  type="password"
                  name="password"
                  onChange={props.confirmPass.bind(this)}
                  errorText={props.err}
                  // value={user.password}
                />
              </div>

              <div className="button-line">
                <button
                  className="btn btn-primary"
                  type="submit"
                  // disabled={!user.password || !user.email}
                >
                  Submit
                </button>
              </div>
            </form>
        ) : (
          console.log(false)
        )}
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
