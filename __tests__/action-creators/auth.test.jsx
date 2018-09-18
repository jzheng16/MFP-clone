import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import history from '../../client/history';
import * as actions from '../../client/store/action-creators/auth';
// Actions to be tested


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
let mockAxios;

const initialState = { user: {} };

describe('Auth Actions', () => {
  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = mockStore(initialState);
  });

  afterEach(() => {
    mockAxios.restore();
    store.clearActions();
  });


  // Why return store.dispatch?
  describe('fetchingUser', () => {
    it('eventually dispatches the GET USER action', () => {
      const fakeUser = { email: 'Cody' };
      mockAxios.onGet('/api/auth/me').replyOnce(200, fakeUser);
      return store.dispatch(actions.fetchingUser()).then(() => {
        const actions1 = store.getActions();
        expect(actions1[0].type).toEqual('GET_USER');
        expect(actions1[0].payload).toEqual(fakeUser);
      });
    });
  });


  describe('logout', () => {
    it('logout: eventually dispatches the REMOVE_USER action', () => {
      mockAxios.onGet('/api/auth/logout').replyOnce(204);
      return store.dispatch(actions.loggingOut()).then(() => {
        const actions1 = store.getActions();
        expect(actions1[0].type).toEqual('REMOVE_USER');
        expect(history.location.pathname).toEqual('/login');
      });
    });
  });

  describe('Signing up', () => {
    it('signup user and eventually call getUser with the new information ', () => {
      const fakeUser = { email: 'hello@hello.com', password: 'fakepassword', first_name: 'bob', last_name: 'builder' };
      const fakeRegisteredUser = { email: 'hello@hello.com', password: 'fakepassword', first_name: 'bob', last_name: 'builder', weight: [151, 153, 175, 173, 151], verified: true };
      mockAxios.onPost('/api/auth/signup', fakeUser).reply(202, fakeRegisteredUser);
      return store.dispatch(actions.signingUp(fakeUser)).then(() => {
        const actions1 = store.getActions();
        expect(actions1[0].type).toEqual('GET_USER');
        expect(actions1[0].payload).toEqual(fakeRegisteredUser);
        expect(history.location.pathname).toEqual('/signup-step2');
      });
    });
  });

  describe('updatingUserInformation', () => {
    it('should eventually call updateUser', () => {
      const fakeUpdateInfo = { first_name: 'Hello', last_name: 'Bye' };
      const fakeUser = { email: 'hello@hello.com', password: 'fakepassword', first_name: 'Hello', last_name: 'Bye' };
      mockAxios.onPost('/api/auth/updateUserInfo', fakeUpdateInfo).reply(200, fakeUser);
      return store.dispatch(actions.updatingUserInformation(fakeUpdateInfo)).then(() => {
        expect(store.getActions()).toEqual([{ type: 'UPDATE_USER', payload: fakeUser }]);
      });
    });
  });

  describe('GET_USER', () => {
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
});
