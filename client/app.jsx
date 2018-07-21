import { hot } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

import React from 'react';
import Routes from './routes';
import NavBarContainer from './containers/NavBarContainer';

const resetStyles = () => injectGlobal`
  ${styledNormalize}
`;

const app = () => {
  resetStyles();
  return (
    <div className="container">
      <NavBarContainer />
      <Routes />
    </div>
  );
};

export default hot(module)(app);
