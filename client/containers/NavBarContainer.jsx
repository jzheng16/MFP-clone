import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from '../components';
import { loggingOut } from '../store/action-creators/auth';

const mapState = state => ({ user: state.auth.user });

const mapDispatch = dispatch => ({
  loggingOut() {
    return dispatch(loggingOut());
  }
});

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, width: 0 };
    this.handleLogout = this.handleLogout.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  closeMenu = () => {
    this.setState({ isOpen: false });
  }


  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  }

  handleLogout() {
    this.props.loggingOut();
  }

  render() {
    return (
      <NavBar {...this.props} {...this.state} closeMenu={this.closeMenu} handleLogout={this.handleLogout} />
    );
  }
}

export default connect(mapState, mapDispatch)(NavBarContainer);

