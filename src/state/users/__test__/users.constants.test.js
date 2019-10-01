import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_CURRENT_USER_ID
} from './../users.constants';

test('users constants', () => {
  expect(SET_CURRENT_USER_ID).toEqual('[User] SET_CURRENT_USER_ID');
});
