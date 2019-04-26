import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Message, Transition } from 'semantic-ui-react';

import { createFood, fetchFood } from '../store/action-creators/foodAction';
import { addingFoodToDiary, searchingDatabase, addingFoodToDbDiary } from '../store/action-creators/diary';
import { ListFoods, AddFood, SearchFood } from '../components';


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
    this.state = { isChecked: [], tabIndex: 2, visible: false, message: '', messageHeader: '' };
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
    this.state.isChecked.forEach(foodId => {
      const qtyIndex = servingSizeArr.findIndex(servingSize => servingSize.id === `${foodId}`);

      if (this.state.message === '') {
        const message = this.state.isChecked.length > 1 ?
          `${e.target.qty[qtyIndex].getAttribute('data-name')} and ${this.state.isChecked.length - 1} other food(s) has just been added to your diary!`
          :
          `${e.target.qty[qtyIndex].getAttribute('data-name')} was added to your diary!`;

        this.setState({ message });
      }
      const qty = +e.target.qty[qtyIndex].value;
      const entry = {

        user_id: this.props.user.id,
        date_id: this.props.diary.currentDiaryDate.id,
        mealType: this.props.diary.currentMealTypeId,
        food_id: foodId,
        qty
      };
      addFoodArr.push(entry);
    });
    this.props.addingFoodToDiary(addFoodArr);
    this.setState({ visible: true, messageHeader: 'Food successfully added!' });
    setTimeout(() => {
      this.setState({ visible: false, message: '', messageHeader: ' ' });
    }, 3000);
  }

  searchingDatabase = e => {
    e.preventDefault();
    this.props.searchingDatabase(e.target.q.value);
  }

  addingFoodToDbDiary = (e, ndbno, name) => {
    e.preventDefault();
    const entry = {
      databaseId: +ndbno,
      mealType: this.props.diary.currentMealTypeId,
      name,
      qty: +e.target.qty.value,
      user_id: this.props.user.id,
      date_id: this.props.diary.currentDiaryDate.id,
    };

    this.props.addingFoodToDbDiary(entry);
    this.setState({ visible: true, message: 'Food succesfully added!' });
    setTimeout(() => {
      this.setState({ visible: false, message: '' });
    }, 3000);
  }

  handleDismiss = () => {
    this.setState({ visible: false, message: '' });
  }

  render() {
    const panes = [
      { menuItem: 'Search Database', render: () => (<Tab.Pane> <SearchFood {...this.props} searchingDatabase={this.searchingDatabase} addingFoodToDbDiary={this.addingFoodToDbDiary} /></Tab.Pane>) },
      { menuItem: 'Add New Food', render: () => <Tab.Pane> <AddFood addFood={this.addFood} /></Tab.Pane> },
      { menuItem: 'List Foods', render: () => <Tab.Pane> <ListFoods {...this.props} {...this.state} addingFoodToDiary={this.addingFoodToDiary} onChange={this.onChange} /></Tab.Pane> },
    ];
    return (
      <div>
        {this.state.visible &&
          <Transition visible={this.state.visible} animation="slide down" duration={500}>
            <Message
              header={this.state.messageHeader || ''}
              content={this.state.message}
              success
              onDismiss={this.handleDismiss}
            />
          </Transition>
        }
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
