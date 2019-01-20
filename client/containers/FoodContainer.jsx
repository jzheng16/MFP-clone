import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';

import { createFood, fetchFood } from '../store/action-creators/foodAction';
import { addingFoodToDiary, searchingDatabase, addingFoodToDbDiary } from '../store/action-creators/diary';
import { ListFoods, AddFood, SearchFood, ListSearchResult } from '../components';


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
  },
  addingFoodToDbDiary(entry) {
    return dispatch(addingFoodToDbDiary(entry));
  }

});

class FoodContainer extends Component {
  constructor(props) {
    super(props);
    this.searchingDatabase = this.searchingDatabase.bind(this);
    this.state = { isChecked: [], tabIndex: 2 };
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

  handleTabChange = (e, data) => {
    console.log('​FoodContainer -> tabId', this.state.tabIndex);

    this.setState({ tabIndex: data.activeIndex });
  };

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
    console.log('​FoodContainer -> servingSizeArr', servingSizeArr);

    this.state.isChecked.forEach(foodId => {
      const qtyIndex = servingSizeArr.findIndex(servingSize => servingSize.id === `${foodId}`);

      const qty = +e.target.qty[qtyIndex].value;
      const entry = {

        user_id: this.props.user.id,
        date_id: this.props.diary.currentDiaryDate.id,
        mealType: this.props.diary.currentMealTypeId,
        food_id: foodId,
        qty
      };
      console.log('​FoodContainer -> entry', entry);

      addFoodArr.push(entry);
    });
    console.log('Final addFoodArr', addFoodArr);
    this.props.addingFoodToDiary(addFoodArr);
  }

  searchingDatabase = e => {
    e.preventDefault();
    this.props.searchingDatabase(e.target.q.value);
    // history.push('/food/search');
  }

  // TODO: Error with addingFoodToDatabaseDiary, works if history.push

  addingFoodToDbDiary = (e, ndbno, name) => {
    console.log('hellooooooo');
    e.preventDefault();
    const entry = {
      databaseId: +ndbno,
      mealType: this.props.diary.currentMealTypeId,
      name,
      qty: +e.target.qty.value,
      user_id: this.props.user.id,
      date_id: this.props.diary.currentDiaryDate.id,
    };
    console.log(entry);
    this.props.addingFoodToDbDiary(entry);
  }


  render() {
    const panes = [
      {
        menuItem: 'Search Database',
        render: () => (
          <Tab.Pane>
            <div>
              <SearchFood {...this.props} searchingDatabase={this.searchingDatabase} addingFoodToDbDiary={this.addingFoodToDbDiary} />
              <ListSearchResult {...this.props} addingFoodToDbDiary={this.addingFoodToDbDiary} />
            </div>
          </Tab.Pane>
        )
      },
      { menuItem: 'Add New Food', render: () => <Tab.Pane> <AddFood addFood={this.addFood} /></Tab.Pane> },
      { menuItem: 'List Foods', render: () => <Tab.Pane> <ListFoods {...this.props} {...this.state} addingFoodToDiary={this.addingFoodToDiary} onChange={this.onChange} /></Tab.Pane> },
    ];
    return (
      <div>
        <Tab
          menuPosition="right"
          onTabChange={this.handleTabChange}
          activeIndex={this.state.tabIndex}
          panes={panes}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);
