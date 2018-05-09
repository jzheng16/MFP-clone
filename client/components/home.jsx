import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <ul>
    <li>
      <NavLink to="/"> Home </NavLink>
    </li>
    <li>
      <NavLink to="/test"> Test </NavLink>
    </li>
    <li className="someList"> Other </li>
  </ul>
);

module.exports = Home;
