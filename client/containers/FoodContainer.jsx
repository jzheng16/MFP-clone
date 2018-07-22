import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { createFood, fetchFood } from '../store/action-creators/foodAction';
import { addingFoodToDiary, searchingDatabase } from '../store/action-creators/diary';
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
  addingFoodToDiary(foodId) {
    return dispatch(addingFoodToDiary(foodId));
  },
  searchingDatabase(query) {
    return dispatch(searchingDatabase(query));
  }

});

class FoodContainer extends Component {
  constructor(props) {
    super(props);
    this.searchingDatabase = this.searchingDatabase.bind(this);
    this.state = {
      isChecked: []
    };
  }

  componentWillMount() {
    this.props.fetchFood();
  }

  onChange = e => {
    let index;
    const checkedArr = this.state.isChecked;

    if (e.target.checked) {
      checkedArr.push(+e.target.value);
    } else {
      index = checkedArr.indexOf(+e.target.value);
      checkedArr.splice(index, 1);
    }
    this.setState({ isChecked: checkedArr });
  }

  addFood = e => {
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

  addingFoodToDiary = e => {
    e.preventDefault();
    const addFoodArr = [];
    const servingSizeArr = Array.from(e.target.qty);

    this.state.isChecked.forEach(food_id => {
      const qtyIndex = _.findIndex(servingSizeArr, { id: `${food_id}` });
      const qty = +e.target.qty[qtyIndex].value;
      const entry = {
        user_id: this.props.user.id,
        date_id: this.props.diary.currentDiaryDate.id,
        mealType: this.props.diary.currentMealTypeId,
        food_id,
        qty
      };

      addFoodArr.push(entry);
    });
    console.log('Final addFoodArr', addFoodArr);
    this.props.addingFoodToDiary(addFoodArr);
  }

  searchingDatabase = e => {
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
          <ListFoods {...this.props} {...this.state} addingFoodToDiary={this.addingFoodToDiary} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);