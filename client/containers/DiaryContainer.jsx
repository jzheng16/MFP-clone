import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Diary } from '../components';


const mapState = state => ({
  diary: state.diary.diary
});

const mapDispatch = dispatch => ({

});

class DiaryContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchDiary();
    console.log(moment().format('YYYY-MM-DD'));
  }

  render() {
    return (
      <Diary {...this.props} />
    );
  }
}

export default connect(mapState, mapDispatch)(DiaryContainer);
