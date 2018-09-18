import authReducer from '../../client/store/reducers/auth';
import * as types from '../../client/store/actions';


describe('auth reducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {})).toEqual({ user: {} });
  });

  it('should handle GET_USER', () => {
    expect(authReducer(undefined, {
      type: types.GET_USER,
      payload: {
        id: 1,
        first_name: 'joey',
        last_name: 'zheng'
      }
    })).toEqual({
      user: {
        id: 1,
        first_name: 'joey',
        last_name: 'zheng'
      }
    });
  });

  it('should handle UPDATE_USER', () => {
    expect(authReducer({
      user: {
        id: 1,
        first_name: 'joey',
        last_name: 'zheng'
      }
    }, {
      type: types.UPDATE_USER,
      payload: {
        id: 1,
        first_name: 'bob',
        last_name: 'the_builder'

      }
    })).toEqual({
      user: {
        id: 1,
        first_name: 'bob',
        last_name: 'the_builder'
      }
    });
  });
});

