import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
  render() {
    const authedUser = this.props.authedUser;

    return (
      <nav className="nav">
        <ul>
          <li>
            {authedUser !== null ? (
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            ) : (
              <span>Home</span>
            )}
          </li>
          <li>
            {authedUser !== null ? (
              <NavLink to="/new" activeClassName="active">
                New Question
              </NavLink>
            ) : (
              <span>New Question</span>
            )}
          </li>
          <li>
            {authedUser !== null ? (
              <NavLink to="/leaderBoard" activeClassName="active">
                Leader Board
              </NavLink>
            ) : (
              <span>Leader Board</span>
            )}
          </li>
          <li>{authedUser !== null ? <span>Hello {authedUser}</span> : ''}</li>
          <li>
            {authedUser !== null ? (
              <NavLink to="/logout">LogOut</NavLink>
            ) : (
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(Nav);
