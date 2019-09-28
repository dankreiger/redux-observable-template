import {
  FETCH_USER_LIST_BEGIN,
  FETCH_USER_LIST_SUCCESS,
  FETCH_USER_LIST_FAILURE,
  SET_CURRENT_USER
} from 'constants/index';

test('user constants', () => {
  expect(FETCH_USER_LIST_BEGIN).toEqual('[User] FETCH_USER_LIST_BEGIN');
  expect(FETCH_USER_LIST_SUCCESS).toEqual('[User] FETCH_USER_LIST_SUCCESS');
  expect(FETCH_USER_LIST_FAILURE).toEqual('[User] FETCH_USER_LIST_FAILURE');
  expect(SET_CURRENT_USER).toEqual('[User] SET_CURRENT_USER');
});
