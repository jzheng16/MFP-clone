import React from 'react';
import Routes from './routes';
import NavBarContainer from './containers/NavBarContainer';
// TODO:
// import Navbar from './components/navbar';
const app = () => (
  <div className="container">
    <NavBarContainer />
    <Routes />
  </div>
);

module.exports = app;
