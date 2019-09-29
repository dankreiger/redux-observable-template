import { combineEpics } from 'redux-observable';
import { fetchUsersListEpic } from './users/users.epics';

export const rootEpic = combineEpics(fetchUsersListEpic);
