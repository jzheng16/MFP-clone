import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div>
    <h1> Welcome to MyFitnessClone! </h1>
    <NavLink to="/addfood"> Add a Food! </NavLink>
  </div>
);

module.exports = Home;
