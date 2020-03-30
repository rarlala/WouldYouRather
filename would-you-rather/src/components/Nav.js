import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderBoard" activeClassName="active">
            Leader Board
          </NavLink>
        </li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}
