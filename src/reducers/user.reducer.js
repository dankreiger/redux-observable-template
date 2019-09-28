import {
  FETCH_USER_LIST_BEGIN,
  FETCH_USER_LIST_SUCCESS,
  FETCH_USER_LIST_FAILURE,
  SET_CURRENT_USER
} from 'constants/index';

const userReducerInitialState = {
  users: null,
  userIds: [],
  currentUser: null,
  loading: false
};

/**
 * @function userReducer
 * @type {React.Reducer<userState, userAction>}
 * @param {userState} state
 * @param {userAction} action
 */

const userReducer = (state = userReducerInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER_LIST_BEGIN:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_LIST_SUCCESS:
      return {
        ...state,
        users: payload.entities.users,
        userIds: payload.result,
        loading: false
      };
    case FETCH_USER_LIST_FAILURE:
      return {
        ...state,
        error: payload
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: state.users[payload]
      };
    default:
      return state;
  }
};

export default userReducer;
