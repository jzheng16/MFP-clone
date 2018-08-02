import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToast, deleteToast } from '../store/action-creators/toasts';
import { Toasts } from '../components';

const mapState = state => ({ toasts: state.toast.toasts });
const mapDispatch = dispatch => ({
  addToast(toast) {
    dispatch(addToast(toast));
  },
  deleteToast(toastId) {
    dispatch(deleteToast(toastId));
  }
});

class ToastContainer extends Component {
  onDismissClick = id => {
    console.log('id', id);

    this.props.deleteToast(id);
  }

  render() {
    return (
      <Toasts {...this.props} onDismissClick={this.onDismissClick} />
    );
  }
}

export default connect(mapState, mapDispatch)(ToastContainer);

