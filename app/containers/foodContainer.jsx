// What do I have to do here... ???
// Import the actions needed to add food
// Handle the onsubmit
// Pass down the actions to the dumb component
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createFood, fetchFood } from '../action-creators/foodAction';
import Food from '../components/addFood';
import ListFoods from '../components/listFoods';

const mapStateToProps = state => ({
  foods: state.foods // Our foods are all on the food state because that is what it is called in our reducer
});
const mapDispatchToProps = dispatch => ({
  createFood(food) {
    return dispatch(createFood(food));
  },
  fetchFood() {
    return dispatch(fetchFood());
  }
});

class FoodContainer extends Component {
  constructor(props) {
    super(props);
    this.addFood = this.addFood.bind(this);
  }

  componentWillMount() {
    this.props.fetchFood();
  }

  addFood(e) {
    e.preventDefault();
    const newFood = {
      name: e.target.name.value,
      calories: e.target.calories.value,
      carbs: e.target.carbs.value,
      protein: e.target.protein.value,
      fat: e.target.fat.value,
    };
    this.props.createFood(newFood);
  }


  render() {
    return (
      <div>
        <Food addFood={this.addFood} />
        <ListFoods {...this.props} {...this.state} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);
