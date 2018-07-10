import React from 'react';
import Routes from './routes';
import NavBarContainer from './containers/NavBarContainer';
import { hot } from 'react-hot-loader';

const app = () => (
  <div className="container">
    <NavBarContainer />
    <Routes />
  </div>
);

export default hot(module)(app);
