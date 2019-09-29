import { ofType } from 'redux-observable';
import { FETCH_URBAN_DICTIONARY_BEGIN } from './urbanDictionary.constants';
import { switchMap, map, debounceTime, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { normalize } from 'normalizr';
import { urbanDictionaryListSchema } from './urbanDictionary.schema';
import {
  fetchUrbanDictionarySuccess,
  fetchUrbanDictionaryFailure
} from './urbanDictionary.actions';
import { of } from 'rxjs';

const {
  REACT_APP_URBAN_API_KEY,
  REACT_APP_URBAN_API_HOST,
  REACT_APP_URBAN_URL
} = process.env;

const searchHeaders = {
  'x-rapidapi-key': REACT_APP_URBAN_API_KEY,
  'x-rapidapi-host': REACT_APP_URBAN_API_HOST
};
const search = term => `${REACT_APP_URBAN_URL}?term=${term}`;
const rxJsFetch = term => ajax.getJSON(search(term), searchHeaders);

// switch map automatically cancels a pending outgoing request if another one is triggered
// note: remove debounceTime  and type fast to see this rxjs feature in the network tab
export function fetchUrbanDictionaryEpic(action$, state$) {
  return action$.pipe(
    ofType(FETCH_URBAN_DICTIONARY_BEGIN),
    debounceTime(500),
    switchMap(({ payload }) =>
      rxJsFetch(payload).pipe(
        map(({ list }) => list),
        map(definitions => normalize(definitions, urbanDictionaryListSchema)),
        map(fetchUrbanDictionarySuccess),
        catchError(err => of(fetchUrbanDictionaryFailure(err)))
      )
    )
  );
}
