import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import { createEpicMiddleware } from 'redux-observable';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root.reducer';
import { rootEpic } from './root.epics';
import rootSaga from './root.sagas';

const middlewares = [];
const epicMiddleware = createEpicMiddleware();
const sagaMiddleware = createSagaMiddleware();

middlewares.push(epicMiddleware);
middlewares.push(sagaMiddleware);

let composedEnhancers;
if (process.env.NODE_ENV === 'development') {
  middlewares.push(invariant());

  composedEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })(
    applyMiddleware(...middlewares)
  );
} else {
  composedEnhancers = compose(applyMiddleware(...middlewares));
}

const persistedState = undefined;
const store = createStore(rootReducer, persistedState, composedEnhancers);
epicMiddleware.run(rootEpic);
sagaMiddleware.run(rootSaga);

export default store;
