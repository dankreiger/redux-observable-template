import {
  FETCH_REPOS_BEGIN,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  SET_CURRENT_USER_ID
} from './../users.constants';

test('users constants', () => {
  expect(FETCH_REPOS_BEGIN).toEqual('[User] FETCH_REPOS_BEGIN');
  expect(FETCH_REPOS_SUCCESS).toEqual('[User] FETCH_REPOS_SUCCESS');
  expect(FETCH_REPOS_FAILURE).toEqual('[User] FETCH_REPOS_FAILURE');
  expect(SET_CURRENT_USER_ID).toEqual('[User] SET_CURRENT_USER_ID');
});
