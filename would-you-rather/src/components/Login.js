import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  state = {
    authedUser: 'sarahedo',
    toHome: false,
    back: null
  };

  handleChange = e => {
    this.setState({
      authedUser: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit complete');

    const { authedUser } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(authedUser));

    if (this.props.history.goBack !== null) {
      this.setState(() => ({
        back: true
      }));
    }

    this.setState(() => ({
      toHome: true
    }));
  };

  render(path) {
    const { toHome, authedUser, back } = this.state;
    const { history } = this.props;
    if (authedUser !== 'null') {
      if (back === true) {
        this.props.history.goBack();
      }
      if (toHome === true) {
        return <Redirect to="/" />;
      }
    }

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

export default withRouter(connect(mapStateToProps)(Login));
