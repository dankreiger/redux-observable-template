import { combineEpics } from 'redux-observable';
import { fetchUserListEpic } from './user.epics';

export const rootEpic = combineEpics(fetchUserListEpic);
