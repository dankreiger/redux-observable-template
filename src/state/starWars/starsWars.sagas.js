import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  starWarsHttpBegin,
  starWarsHttpSuccess,
  starWarsReducerName,
  starWarsHttpSuccessFailure,
} from './starWars.constants';
import { normalize } from 'normalizr';
import { starWarsListSchema } from './starWars.schema';

const api = (url) => fetch(url).then((res) => res.json());
export function* fetchStarWarsBeginAsync({ payload }) {
  try {
    const { results } = yield call(api, `https://swapi.dev/api/${payload}`);
    const starWarsDictionary = yield normalize(results, starWarsListSchema);

    yield put(
      starWarsHttpSuccess({
        byId: starWarsDictionary.entities[starWarsReducerName],
        allIds: starWarsDictionary.result,
      })
    );
  } catch (e) {
    yield put(
      starWarsHttpSuccessFailure({
        e,
      })
    );
  }
}

export function* watchFetchStarWarsBegin() {
  console.log(starWarsHttpBegin().type);
  yield takeLatest(starWarsHttpBegin().type, fetchStarWarsBeginAsync);
}
export function* starsWarsSagas() {
  yield all([call(watchFetchStarWarsBegin)]);
}
