import {
  FETCH_REPOS_LIST_BEGIN,
  FETCH_REPOS_LIST_SUCCESS,
  FETCH_REPOS_LIST_FAILURE,
  SET_CURRENT_USER_ID
} from './../users.constants';

test('users constants', () => {
  expect(FETCH_REPOS_LIST_BEGIN).toEqual('[User] FETCH_REPOS_LIST_BEGIN');
  expect(FETCH_REPOS_LIST_SUCCESS).toEqual('[User] FETCH_REPOS_LIST_SUCCESS');
  expect(FETCH_REPOS_LIST_FAILURE).toEqual('[User] FETCH_REPOS_LIST_FAILURE');
  expect(SET_CURRENT_USER_ID).toEqual('[User] SET_CURRENT_USER_ID');
});
