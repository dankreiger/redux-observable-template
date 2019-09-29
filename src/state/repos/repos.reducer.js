import {
  FETCH_REPOS_LIST_BEGIN,
  FETCH_REPOS_LIST_SUCCESS,
  FETCH_REPOS_LIST_FAILURE
} from './repos.constants';

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
 * @function users
 * @type {import('redux').Reducer<UsersState, UsersAction>}
 * @param {UsersState} state
 * @param {UsersAction} action
 */
const repos = (state = repoInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_REPOS_LIST_BEGIN:
      return {
        ...state,
        loading: true
      };
    case FETCH_REPOS_LIST_SUCCESS:
      return {
        ...state,
        byId: payload.entities.repos,
        allIds: payload.result,
        loading: false
      };
    case FETCH_REPOS_LIST_FAILURE:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
};

export default repos;
