import whr from 'with-http-reducer';

export const starWarsReducerName = 'starWars';
export const starWarsHttpReducer = reducer =>
  whr.withHttpReducer(reducer, starWarsReducerName);

export const starWarsHttpBegin = payload =>
  whr.httpBegin(starWarsReducerName, payload);
export const starWarsHttpSuccess = payload =>
  whr.httpSuccess(starWarsReducerName, payload);
export const starWarsHttpSuccessFailure = payload =>
  whr.httpFailure(starWarsReducerName, payload);
