import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createFood, fetchFood } from '../store/action-creators/foodAction';
import { addingUserFoodToDiary } from '../store/action-creators/diary';
import { ListFoods, AddFood } from '../components';


const mapStateToProps = state => ({
  foods: state.foods, // Our foods are all on the food state because that is what it is called in our reducer
  user: state.auth.user,
  diary: state.diary
});
const mapDispatchToProps = dispatch => ({
  createFood(food) {
    return dispatch(createFood(food));
  },
  fetchFood() {
    return dispatch(fetchFood());
  },
  addingUserFoodToDiary(foodId) {
    return dispatch(addingUserFoodToDiary(foodId));
  }

});

class FoodContainer extends Component {
  constructor(props) {
    super(props);
    this.addFood = this.addFood.bind(this);
    this.addingUserFoodToDiary = this.addingUserFoodToDiary.bind(this);
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
      user_id: this.props.user.id
    };
    this.props.createFood(newFood);
  }

  addingUserFoodToDiary(foodId) {
    // Need user ID (this.props.user.id), date_id (this.props.diary.currentDiaryDate.id),
    // food ID and currentMealTypeId in array
    console.log('props?', this.props);

    const entry = {
      user_id: this.props.user.id,
      date_id: this.props.diary.currentDiaryDate.id,
      user_food_entry: [foodId, this.props.diary.currentMealTypeId]
    };
    console.log('wtf is entry in food container?', entry);

    this.props.addingUserFoodToDiary(entry);
    // this.props.addingToDatabase
  }


  render() {
    return (
      <div>
        <div className="addFood">
          <AddFood addFood={this.addFood} />
          <ListFoods {...this.props} {...this.state} addingUserFoodToDiary={this.addingUserFoodToDiary} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);
