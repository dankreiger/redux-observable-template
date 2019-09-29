import { normalize } from 'normalizr';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { fetchUsersSuccess, fetchUsersFailure } from './users.actions';
import { FETCH_USERS_BEGIN } from './users.constants';
import { usersSchema } from './users.schema';
import { of } from 'rxjs';

const usersUrl = `${process.env.REACT_APP_URL}/users`;

export function fetchUsersEpic(action$) {
  return action$.pipe(
    ofType(FETCH_USERS_BEGIN),
    switchMap(() => {
      return ajax.getJSON(usersUrl).pipe(
        map(users => normalize(users, usersSchema)),
        map(dictionary => fetchUsersSuccess(dictionary)),
        catchError(err => of(fetchUsersFailure(err)))
      );
    })
  );
}
