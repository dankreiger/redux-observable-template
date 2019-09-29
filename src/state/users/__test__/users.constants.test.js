import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_CURRENT_USER_ID
} from './../users.constants';

test('users constants', () => {
  expect(FETCH_USERS_BEGIN).toEqual('[User] FETCH_USERS_BEGIN');
  expect(FETCH_USERS_SUCCESS).toEqual('[User] FETCH_USERS_SUCCESS');
  expect(FETCH_USERS_FAILURE).toEqual('[User] FETCH_USERS_FAILURE');
  expect(SET_CURRENT_USER_ID).toEqual('[User] SET_CURRENT_USER_ID');
});
