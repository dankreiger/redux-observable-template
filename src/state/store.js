import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './root.reducer';
import { rootEpic } from './root.epics';

const middlewares = [];
const epicMiddleware = createEpicMiddleware();
middlewares.push(epicMiddleware);

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

export default store;
