import { SET_CURRENT_USER_ID } from './users.constants';

export const setCurrentUser = id => ({
  type: SET_CURRENT_USER_ID,
  payload: id
});
