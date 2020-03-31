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
            {authedUser !== 'null' ? (
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            ) : (
              <NavLink to="/login">Home</NavLink>
            )}
            {/* <NavLink to="/" activeClassName="active">
              Home
            </NavLink> */}
          </li>
          <li>
            {authedUser !== 'null' ? (
              <NavLink to="/new" activeClassName="active">
                New Question
              </NavLink>
            ) : (
              <NavLink to="/login">New Question</NavLink>
            )}
            {/* <NavLink to="/new" activeClassName="active">
              New Question
            </NavLink> */}
          </li>
          <li>
            {authedUser !== 'null' ? (
              <NavLink to="/leaderBoard" activeClassName="active">
                Leader Board
              </NavLink>
            ) : (
              <NavLink to="/login">Leader Board</NavLink>
            )}
            {/* <NavLink to="/leaderBoard" activeClassName="active">
              Leader Board
            </NavLink> */}
          </li>
          <li>
            {authedUser !== 'null' ? <span>Hello {authedUser}</span> : ''}
          </li>
          <li>
            {authedUser !== 'null' ? (
              <NavLink to="/logout" activeClassName="active">
                LogOut
              </NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
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
