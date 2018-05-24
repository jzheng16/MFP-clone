import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListSearchResult } from '../components';

const mapState = state => ({
  diary: state.diary
});

class ListSearchResultContainer extends Component {
  render() {
    return (
      <ListSearchResult {...this.props} />
    );
  }
}

export default connect(mapState, null)(ListSearchResultContainer);
