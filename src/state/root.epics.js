import { combineEpics } from 'redux-observable';
import { fetchUsersEpic } from './users/users.epics';
import { fetchReposEpic } from './repos/repos.epics';
import { fetchUrbanDictionaryEpic } from './urbanDictionary/urbanDictionary.epics';

export const rootEpic = combineEpics(
  fetchUsersEpic,
  fetchReposEpic,
  fetchUrbanDictionaryEpic
);
