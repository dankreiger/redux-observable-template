import {
  FETCH_REPOS_BEGIN,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  reposReducerName as name
} from './repos.constants';
import { withHttpReducer } from 'state/utils/higherOrderReducers/withHttpReducer.reducer';

/**
 * @typedef {import('redux').AnyAction} ReposAction
 */

/**
 * @description Repo
 * !!TODO
 *
 * @typedef
 */

/**
 * @typedef {{byId: Object.<string, User>, allIds: string[], loading: boolean, currentRepoId: Repo | null}} ReposState
 */

const repoInitialState = {
  byId: {},
  allIds: [],
  loading: false
};

/**
 * @function repos
 * @type {import('redux').Reducer<ReposState, ReposAction>}
 * @param {ReposState} state
 * @param {ReposAction} action
 */
const repos = (state = repoInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_REPOS_BEGIN:
      return {
        ...state,
        loading: true
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        byId: payload.entities.repos,
        allIds: payload.result,
        loading: false
      };
    case FETCH_REPOS_FAILURE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default withHttpReducer(repos, name);
