import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%; /* not needed since it will default expand to 100%? */
  background: #d9e4ea;
`;

export default props => (
  <FooterWrapper>
    <p> &#169; 2018 Joey Zheng </p>
  </FooterWrapper>
);

