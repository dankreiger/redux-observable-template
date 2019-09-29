import {
  FETCH_USERS_LIST_BEGIN,
  FETCH_USERS_LIST_SUCCESS,
  FETCH_USERS_LIST_FAILURE,
  SET_CURRENT_USER_ID
} from './users.constants';

export const fetchUsersListBegin = login => ({
  type: FETCH_USERS_LIST_BEGIN,
  payload: login
});

export const fetchUsersListSuccess = response => ({
  type: FETCH_USERS_LIST_SUCCESS,
  payload: response
});
export const fetchUsersListFailure = error => ({
  type: FETCH_USERS_LIST_FAILURE,
  payload: error
});

export const setCurrentUser = id => ({
  type: SET_CURRENT_USER_ID,
  payload: id
});
