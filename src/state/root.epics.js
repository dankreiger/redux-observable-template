import { combineEpics } from 'redux-observable';
import { fetchUsersListEpic } from './users/users.epics';
import { fetchReposListEpic } from './repos/repos.epics';

export const rootEpic = combineEpics(fetchUsersListEpic, fetchReposListEpic);
