import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './StyledComponents';
import styled from 'styled-components';

const StyledLaterLink = styled(Link)`
  font-size: .8em;
`;


export default ({ user, resendingVerificationEmail }) => (
  user.verified ?
    <div>
      <h1> Verified! </h1>
      <Link to="/"> Get started </Link>
    </div>
    :
    <div>
      <h3> Welcome to MyFitnessClone {user.first_name}! We just need to verify your e-mail to get started! An e-mail has been sent to {user.email}. </h3>
      <Button onClick={() => resendingVerificationEmail({ email: user.email, first_name: user.first_name })}> Resend Email </Button>
      <p> In the meantime.. you can fill out some information that we need to get you started on your fitness journey! <StyledLaterLink to="/"> Maybe later... </StyledLaterLink> </p>
    </div>
);

