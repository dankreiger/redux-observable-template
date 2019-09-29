import {
  FETCH_REPOS_LIST_BEGIN,
  FETCH_REPOS_LIST_SUCCESS,
  FETCH_REPOS_LIST_FAILURE
} from './repos.constants';

export const fetchReposListBegin = login => ({
  type: FETCH_REPOS_LIST_BEGIN,
  payload: login
});

export const fetchReposListSuccess = response => ({
  type: FETCH_REPOS_LIST_SUCCESS,
  payload: response
});
export const fetchReposListFailure = error => ({
  type: FETCH_REPOS_LIST_FAILURE,
  payload: error
});
