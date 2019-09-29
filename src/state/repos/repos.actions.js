import {
  FETCH_REPOS_BEGIN,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE
} from './repos.constants';

export const fetchReposBegin = login => ({
  type: FETCH_REPOS_BEGIN,
  payload: login
});

export const fetchReposSuccess = response => ({
  type: FETCH_REPOS_SUCCESS,
  payload: response
});
export const fetchReposFailure = error => ({
  type: FETCH_REPOS_FAILURE,
  payload: error
});
