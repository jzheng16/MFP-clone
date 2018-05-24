import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createFood, fetchFood } from '../store/action-creators/foodAction';
import { addingUserFoodToDiary, searchingDatabase } from '../store/action-creators/diary';
import { ListFoods, AddFood, SearchFood } from '../components';
import history from '../history';

const mapStateToProps = state => ({
  foods: state.foods,
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
  },
  searchingDatabase(query) {
    return dispatch(searchingDatabase(query));
  }

});

class FoodContainer extends Component {
  constructor(props) {
    super(props);
    this.addFood = this.addFood.bind(this);
    this.addingUserFoodToDiary = this.addingUserFoodToDiary.bind(this);
    this.searchingDatabase = this.searchingDatabase.bind(this);
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
    const entry = {
      user_id: this.props.user.id,
      date_id: this.props.diary.currentDiaryDate.id,
      user_food_entry: [foodId, this.props.diary.currentMealTypeId]
    };
    this.props.addingUserFoodToDiary(entry);
  }

  searchingDatabase(e) {
    e.preventDefault();
    this.props.searchingDatabase(e.target.q.value);
    history.push('/food/search');
  }


  render() {
    return (
      <div>
        <div className="addFood">
          <SearchFood {...this.props} searchingDatabase={this.searchingDatabase} />
          <AddFood addFood={this.addFood} />
          <ListFoods {...this.props} {...this.state} addingUserFoodToDiary={this.addingUserFoodToDiary} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);
