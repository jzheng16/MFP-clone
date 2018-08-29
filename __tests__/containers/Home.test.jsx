import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import * as actions from '../../client/store/actions';
import { HomeContainer, mapDispatch } from '../../client/containers/HomeContainer';
import { Home } from '../../client/components';
import { fetchingGoal } from '../../client/store/action-creators/goal';
import { uploadingUserImage, testing } from '../../client/store/action-creators/auth';
import history from '../../client/history';


const mockStore = configureStore();
const store = mockStore();

let homeContainer;
describe('Home actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  // TODO: Not working
  //   it('should render Home Component', () => {
  //     const fetchGoalSpy = jest.fn();
  //     const renderedComponent = shallow(<HomeContainer user={{ id: 1 }} goal={{}} fetchingGoal={fetchGoalSpy} />);

  //     console.log('rendered', renderedComponent.debug());
  //     expect(renderedComponent.contains(<Home user={{ id: 1 }} goal={{}} uploadImage={jest.fn()} />)).toEqual(true);
  //   });

  it('should fetch user goals on mount if user exists', () => {
    const fetchGoalSpy = jest.fn();
    const WrappedComponent = <HomeContainer user={{ id: 1 }} fetchingGoal={fetchGoalSpy} />;
    homeContainer = mount(<Router> {WrappedComponent} </Router>);
    expect(fetchGoalSpy).toHaveBeenCalled();
  });
});

