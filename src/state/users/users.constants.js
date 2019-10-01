import whr from 'with-http-reducer';

export const usersReducerName = 'users';

export const usersHttpReducer = reducer =>
  whr.withHttpReducer(reducer, usersReducerName);

export const usersHttpBegin = payload =>
  whr.httpBegin(usersReducerName, payload);
export const usersHttpFailure = payload =>
  whr.httpFailure(usersReducerName, payload);
export const usersHttpSuccess = payload =>
  whr.httpSuccess(usersReducerName, payload);

export const SET_CURRENT_USER_ID = '[Users] SET_CURRENT_USER_ID';
