import { normalize } from 'normalizr';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { fetchUsersListSuccess, fetchUsersListFailure } from './users.actions';
import { FETCH_USERS_LIST_BEGIN } from './users.constants';
import { userListSchema } from './users.schema';

const usersListUrl = process.env.REACT_APP_USERS_LIST_URL;

export function fetchUsersListEpic(action$) {
  return action$.pipe(
    ofType(FETCH_USERS_LIST_BEGIN),
    switchMap(() => {
      return ajax.getJSON(usersListUrl).pipe(
        map(users => normalize(users, userListSchema)),
        map(dictionary => fetchUsersListSuccess(dictionary)),
        catchError(error => fetchUsersListFailure(error))
      );
    })
  );
}
