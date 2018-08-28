import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import React from 'react';

import * as actions from '../../client/store/actions';
import { HomeContainer, mapDispatch } from '../../client/containers/HomeContainer';
import { Home } from '../../client/components';
import { fetchingGoal } from '../../client/store/action-creators/goal';


const mockStore = configureStore();
const store = mockStore();

describe('Home actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should render Home Component', () => {
    const renderedComponent = shallow(<HomeContainer user={{ id: 1 }} goal={{}} />);
    expect(renderedComponent.contains(<Home user={{ id: 1 }} goal={{}} />)).toEqual(true);
  });
});

