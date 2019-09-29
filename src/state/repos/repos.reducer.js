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
  loading: false,
  currentRepoId: null
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
    default:
      return state;
  }
};

export default repos;
