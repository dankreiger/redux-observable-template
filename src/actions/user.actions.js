import {
  FETCH_USER_LIST_BEGIN,
  FETCH_USER_LIST_SUCCESS,
  FETCH_USER_LIST_FAILURE,
  SET_CURRENT_USER
} from 'constants/index';

export const fetchUserListBegin = login => ({
  type: FETCH_USER_LIST_BEGIN,
  payload: login
});

export const fetchUserListSuccess = response => ({
  type: FETCH_USER_LIST_SUCCESS,
  payload: response
});
export const fetchUserListFailure = error => ({
  type: FETCH_USER_LIST_FAILURE,
  payload: error
});

export const setCurrentUser = id => ({
  type: SET_CURRENT_USER,
  payload: id
});
