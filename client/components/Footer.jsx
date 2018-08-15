import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%; /* not needed since it will default expand to 100%? */
<<<<<<< Updated upstream
  background: #d9e4ea;
=======
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
  
>>>>>>> Stashed changes
`;

export default props => (
  <FooterWrapper>
    <p> &#169; 2018 Joey Zheng </p>
  </FooterWrapper>
);

