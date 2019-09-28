import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';

import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from 'epics';

const middlewares = [];
const enhancers = [];
const epicMiddleware = createEpicMiddleware();
middlewares.push(epicMiddleware);

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const persistedState = undefined;
const store = createStore(rootReducer, persistedState, composedEnhancers);

epicMiddleware.run(rootEpic);

export default store;
