import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  render() {
    return (
      <div className="content">
        <div className="sign-in-box-top">
          <h2>Welcome to the Would You Rather App!</h2>
          <p>Please sign in to continue</p>
        </div>
        <div className="sign-in-box-bottom">
          <img src="../images/logo.png" alt="logo"></img>
          <h1>Sign in</h1>
          <form>
            <select id="authedUser" onChange={this.handleChange}>
              {this.props.userList.map(user => (
                <option value={user} key={user}>
                  {user}
                </option>
              ))}
            </select>
            <button className="button" onClick={this.handleSubmit}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userList: Object.keys(users)
  };
}

export default connect(mapStateToProps)(Login);
