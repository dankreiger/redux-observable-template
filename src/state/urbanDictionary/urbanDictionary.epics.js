import { ofType } from 'redux-observable';
import {
  urbanDictionaryHttpFailure,
  urbanDictionaryHttpBegin,
  urbanDictionaryHttpSuccess,
  urbanDictionaryReducerName,
} from './urbanDictionary.constants';
import { switchMap, map, debounceTime, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { normalize } from 'normalizr';
import { urbanDictionaryListSchema } from './urbanDictionary.schema';

import { of } from 'rxjs';
import { URBAN_DICTIONARY } from 'config';

const {
  REACT_APP_URBAN_API_KEY,
  REACT_APP_URBAN_API_HOST,
  REACT_APP_URBAN_URL,
} = URBAN_DICTIONARY;

const searchHeaders = {
  'x-rapidapi-key': REACT_APP_URBAN_API_KEY,
  'x-rapidapi-host': REACT_APP_URBAN_API_HOST,
};
const search = (term) => `${REACT_APP_URBAN_URL}?term=${term}`;
const rxJsFetch = (term) => ajax.getJSON(search(term), searchHeaders);

// switch map automatically cancels a pending outgoing request if another one is triggered
// note: remove debounceTime  and type fast to see this rxjs feature in the network tab
export function fetchUrbanDictionaryEpic(action$) {
  return action$.pipe(
    ofType(urbanDictionaryHttpBegin().type),
    debounceTime(500),
    switchMap(({ payload }) =>
      rxJsFetch(payload).pipe(
        map(({ list }) => list),
        map((definitions) => normalize(definitions, urbanDictionaryListSchema)),
        map(({ entities, result }) =>
          urbanDictionaryHttpSuccess({
            byId: entities[urbanDictionaryReducerName],
            allIds: result,
          })
        ),
        catchError((err) => of(urbanDictionaryHttpFailure({ err })))
      )
    )
  );
}
