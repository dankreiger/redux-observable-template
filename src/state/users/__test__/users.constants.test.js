import {
  FETCH_USERS_LIST_BEGIN,
  FETCH_USERS_LIST_SUCCESS,
  FETCH_USERS_LIST_FAILURE,
  SET_CURRENT_USER_ID
} from './../users.constants';

test('users constants', () => {
  expect(FETCH_USERS_LIST_BEGIN).toEqual('[User] FETCH_USERS_LIST_BEGIN');
  expect(FETCH_USERS_LIST_SUCCESS).toEqual('[User] FETCH_USERS_LIST_SUCCESS');
  expect(FETCH_USERS_LIST_FAILURE).toEqual('[User] FETCH_USERS_LIST_FAILURE');
  expect(SET_CURRENT_USER_ID).toEqual('[User] SET_CURRENT_USER_ID');
});
