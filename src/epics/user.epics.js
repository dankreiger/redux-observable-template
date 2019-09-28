import { normalize } from 'normalizr';
import { switchMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { fetchUserListSuccess } from 'actions';
import { FETCH_USER_LIST_BEGIN } from 'constants/user.constants';
import { userListSchema } from 'schemas/user.schema';

export function fetchUserListEpic(action$) {
  return action$.ofType(FETCH_USER_LIST_BEGIN).pipe(
    switchMap(() => {
      return ajax
        .getJSON(`https://api.github.com/users/dankreiger/following`)
        .pipe(
          map(users => {
            const usersDictionary = normalize(users, userListSchema);
            return fetchUserListSuccess(usersDictionary);
          })
        );
    })
  );
}
