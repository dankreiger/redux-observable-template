import { normalize } from 'normalizr';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import {
  usersHttpBegin,
  usersHttpSuccess,
  usersHttpFailure,
  usersReducerName
} from './users.constants';
import { usersSchema } from './users.schema';
import { of } from 'rxjs';
import { setDictionary } from 'state/utils/dictionary';

const usersUrl = `${process.env.REACT_APP_URL}/users`;
export function fetchUsersEpic(action$) {
  return action$.pipe(
    ofType(usersHttpBegin().type),
    switchMap(() => {
      return ajax.getJSON(usersUrl).pipe(
        map(users => normalize(users, usersSchema)),
        map(payload =>
          usersHttpSuccess(setDictionary(payload, usersReducerName))
        ),
        catchError(err => of(usersHttpFailure({ err })))
      );
    })
  );
}
