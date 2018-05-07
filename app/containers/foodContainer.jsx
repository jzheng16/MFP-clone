// What do I have to do here... ???
// Import the actions needed to add food
// Handle the onsubmit
// Pass down the actions to the dumb component
import React, { Component } from 'react';
import { connect } from 'react-redux';

import createFood from '../action-creators/foodAction';
import addFood from '../components/addFood';

const mapStateToProps = () => { };
const mapDispatchToProps = dispatch => ({
  createFood(food) {
    return dispatch(createFood(food));
  }
});


class FoodContainer extends Component {
  constructor(props) {
    super(props);
    this.addFood = this.addFood.bind(this);
  }


  componentDidMount() { }

  addFood(e) {
    console.log('what is this value? ', e);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <addFood {...this.props} addFood={this.addFood} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);
