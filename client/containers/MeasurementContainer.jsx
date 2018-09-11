import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTime } from 'date-fns';
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
    this.setState({ display: e.value });
  }

  updateMeasurement = e => {
    e.preventDefault();
    const today = getTime(new Date());
    const {
      weight, arm, waist, thigh, hips, neck
    } = e.target;
    const measurementObj = {
      weight: weight.value ? { date: today, value: +e.target.weight.value } : null,
      arm: arm.value ? { date: today, value: +e.target.arm.value } : null,
      waist: waist.value ? { date: today, value: +e.target.waist.value } : null,
      neck: neck.value ? { date: today, value: +e.target.neck.value } : null,
      thigh: thigh.value ? { date: today, value: +e.target.thigh.value } : null,
      hips: hips.value ? { date: today, value: +e.target.hips.value } : null
    };
    console.log(measurementObj);
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
