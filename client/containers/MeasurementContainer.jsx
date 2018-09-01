import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Measurement } from '../components';
import { fetchingMeasurement, updatingMeasurement } from '../store/action-creators/measurement';

class MeasurementContainer extends Component {
  componentDidMount() {
    this.props.fetchingMeasurement();
  }

  updateMeasurement = e => {
    console.log('event: ', e.target);
  };

  render() {
    return (
      <Measurement {...this.props} updateMeasurement={this.updateMeasurement} />
    );
  }
}


export const mapDispatch = dispatch => ({
  fetchingMeasurement() {
    dispatch(fetchingMeasurement());
  },
  updatingMeasurement(updateObj) {
    dispatch(updatingMeasurement(updateObj));
  }
});
const mapState = state => ({ measurement: state.measurement.measurement });

export default connect(mapState, mapDispatch)(MeasurementContainer);
