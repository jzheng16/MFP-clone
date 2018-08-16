import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapState = state => ({ user: state.auth.user });

const mapDispatch = dispatch => ({});

const Test = props => (
  <button onClick={props.testing}></button>
);

export default connect(mapState, mapDispatch)(Test);
