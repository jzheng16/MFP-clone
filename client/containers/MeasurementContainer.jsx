import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Measurement } from '../components';
import { fetchingMeasurement, updatingMeasurement } from '../store/action-creators/measurement';

class MeasurementContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { display: 'weight' };
  }
  componentDidMount() {
    this.props.fetchingMeasurement();
  }

  changeGraph = e => {
    this.setState({ display: e.target.value });
  }

  updateMeasurement = e => {
    e.preventDefault();
    const today = moment().unix();
    console.log('value: ', e.target.weight.value);

    console.log('event: ', e.target);
    const measurementObj = { weight: { date: today, value: +e.target.weight.value } };
    this.props.updatingMeasurement(measurementObj);
  }

  render() {
    return (
      <Measurement {...this.state} {...this.props} changeGraph={this.changeGraph} updateMeasurement={this.updateMeasurement} />
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
