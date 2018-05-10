import { Router, Route, withRouter, Switch, IndexRedirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listFoods, addFood, Home } from './components';
import foodContainer from './containers/foodContainer';

const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => ({});

class Routes extends Component {
  componentDidMount() { }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addFood" component={foodContainer} />
          <Route exact path="/listFoods" component={foodContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
