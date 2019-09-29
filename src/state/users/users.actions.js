import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_CURRENT_USER_ID
} from './users.constants';

export const fetchUsersBegin = login => ({
  type: FETCH_USERS_BEGIN,
  payload: login
});

export const fetchUsersSuccess = response => ({
  type: FETCH_USERS_SUCCESS,
  payload: response
});
export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: error
});

export const setCurrentUser = id => ({
  type: SET_CURRENT_USER_ID,
  payload: id
});
