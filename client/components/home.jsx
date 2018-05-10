import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <ul>
    <li>
      <NavLink to="/"> Home </NavLink>
    </li>
    <li>
      <NavLink to="/addFood"> Add food </NavLink>
    </li>
    <li>
      <NavLink to="/listFoods"> List Foods </NavLink>
    </li>
  </ul>
);

module.exports = Home;
