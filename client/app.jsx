import { hot } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

import React from 'react';
import Routes from './routes';
import NavBarContainer from './containers/NavBarContainer';
import ToastsContainer from './containers/ToastsContainer';
import { Footer } from './components/';

// Normalize styles across all browsers. Not a CSS reset.
const resetStyles = () => injectGlobal`
  ${styledNormalize}
`;

const app = () => {
  resetStyles();
  return (
    <div className="container">
      <NavBarContainer />
      <ToastsContainer />
      <Routes />
      <Footer />
    </div>
  );
};

export default hot(module)(app);
