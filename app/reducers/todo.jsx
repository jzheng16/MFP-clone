import { ADD_TODO, DELETE_TODO } from '../actions';

const initialState = {
  todo: [],
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_TODO:
      newState.todos = [
        ...newState.todos,
        { text: state.todos, completed: false },
      ];
      break;
    case DELETE_TODO:
      newState.todos = newState.todos.filter(todo => todo.index !== action.index);
      break;
    default:
      return state;
  }
  return newState;
};
