import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  console.log('verification props?', props);
  return (
    props.user.verified ?
      <div>
        <h1> Verified! </h1>
        <Link to="/"> Get started </Link>
      </div>
      :
      <div>
        <p> Welcome to MyFitness Clone! We just need to verify your e-mail to get started! </p>
        <p> An e-mail has been sent to {props.user.email}. </p>
        <button onClick={() => props.resendingVerificationEmail({ email: props.user.email, first_name: props.user.first_name })}> Resend E-mail </button>
      </div>
  );
};

