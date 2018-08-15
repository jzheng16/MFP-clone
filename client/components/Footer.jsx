import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Ul, List } from './StyledComponents';

const FooterWrapper = styled.footer`
  width: 100%; /* not needed since it will default expand to 100%? */
  background: #d9e4ea;
  background: #242729;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
`;

const StyledCopyright = styled.p`
  grid-column: 1/2;
  color: #848d95;
  
`;

const LinkWrapper = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
`;
const StyledFooterLink = styled(Link)` 
  color: #848d95;
  margin-right: 1em;
  text-decoration: none;
  text-align: center;
  
`;

// <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
export default props => (
  <FooterWrapper>
    <StyledCopyright> &#169; 2018 Joey Zheng </StyledCopyright>
    <LinkWrapper>
      <StyledFooterLink to="/about"> About </StyledFooterLink>
      <StyledFooterLink to="/contact"> Contact </StyledFooterLink>
      <StyledFooterLink to="/feedback"> Feedback </StyledFooterLink>
    </LinkWrapper>
  </FooterWrapper>
);

