import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import { createBrowserHistory } from 'history';
import sinon from 'sinon';
import * as router from 'react-router';
// Actions to be tested
import * as actions from '../../client/store/action-creators/auth';


const mockStore = configureStore();
const store = mockStore();
const mock = new MockAdapter(axios);

// Example:

// mock.onGet('/api/auth/login').reply(200, {
//   id:
// })

describe('Auth Actions', () => {
  beforeEach(() => {
    store.clearActions();
    // router.browserHistory = { push: () => { } };
    // const browserHistoryPushStub = sinon.stub(router.browserHistory, 'push', () => { });
    // // mount your component and do your thing here
    // expect(browserHistoryPushStub).to.have.been.calledOnce;

    // browserHistoryPushStub.restore();
  });

  it('Dispatches the correct GET_USER action and payload', () => {
    // store.getActions will return an array of all the actions
    const expectedAction = [
      {
        type: 'GET_USER',
        payload: {
          id: 1,
          first_name: 'joey',
          last_name: 'zheng'
        }
      }];
    store.dispatch(actions.getUser({
      id: 1,
      first_name: 'joey',
      last_name: 'zheng'
    }));
    expect(store.getActions()).toEqual(expectedAction);
  });
});

