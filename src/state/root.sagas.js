import { all, call } from 'redux-saga/effects';
import { starsWarsSagas } from './starWars/starsWars.sagas';

export default function* rootSaga() {
  yield all([call(starsWarsSagas)]);
}
