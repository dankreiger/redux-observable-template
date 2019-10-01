import whr from 'with-http-reducer';

export const urbanDictionaryReducerName = 'urbanDictionary';

export const urbanDictionaryHttpReducer = reducer =>
  whr.withHttpReducer(reducer, urbanDictionaryReducerName);

export const urbanDictionaryHttpBegin = payload =>
  whr.httpBegin(urbanDictionaryReducerName, payload);
export const urbanDictionaryHttpFailure = payload =>
  whr.httpFailure(urbanDictionaryReducerName, payload);
export const urbanDictionaryHttpSuccess = payload =>
  whr.httpSuccess(urbanDictionaryReducerName, payload);
