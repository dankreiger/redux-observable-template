import { normalize } from 'normalizr';
import { ofType } from 'redux-observable';
import { map, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { FETCH_REPOS_LIST_BEGIN } from './repos.constants';
import { reposListSchema } from './repos.schema';

import { fetchReposListSuccess } from './repos.actions';

// const repoListUrl = id => `https://api.github.com/user/${id}/repos`;
const repoListUrl = `${process.env.REACT_APP_URL}/repos`;

export function fetchReposListEpic(action$, state$) {
  return action$.pipe(
    ofType(FETCH_REPOS_LIST_BEGIN),
    /* for github api */
    // map(() => state$.value.users.allIds.map(repoListUrl)),
    // map(urls => urls.map(url => ajax.getJSON(url))),
    // execute ajax requests
    // mergeMap(reqs => forkJoin(reqs)),
    // map(repos => repos.flat()),
    switchMap(() => {
      return ajax.getJSON(repoListUrl).pipe(
        map(reposList => normalize(reposList, reposListSchema)),
        map(repos => fetchReposListSuccess(repos))
      );
    })
  );
}
