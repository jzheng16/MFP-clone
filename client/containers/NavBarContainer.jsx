import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from '../components';
import { loggingOut } from '../store/action-creators/auth';

const mapState = state => ({
  user: state.auth.user
});

const mapDispatch = dispatch => ({
  loggingOut() {
    return dispatch(loggingOut());
  }
});

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentDidMount() {
  }
  handleLogout() {
    this.props.loggingOut();
  }

  render() {
    return (
      <NavBar {...this.props} handleLogout={this.handleLogout} />
    );
  }
}

export default connect(mapState, mapDispatch)(NavBarContainer);

