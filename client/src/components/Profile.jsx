import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Profile = props => (
  <div className="container" style={{ padding: '10px' }}>
    <div className="card">
      <div className="card-header p-4">
        <h4 className="card-title">My Profile</h4>
        <h6 className="card-subtitle mb-2 text-muted">You.. were a Llama once!</h6>
      </div>
      <div className="card-body">
        <div className="card-block px-4">
          <div className="form-group row">
           <label className="col-4">Name:</label>
           <label className="col-8">{props.userData.name}</label>
         </div>
          <div className="form-group row">
           <label className="col-4">Email:</label>
           <label className="col-8">{props.userData.email}</label>
         </div>
        </div>
        <button
          className="btn btn-warning"
          onClick={props.onLogOut.bind(this)}
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
);

Profile.propTypes = {
  secretData: PropTypes.string.isRequired,
};

export default Profile;
