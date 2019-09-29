import {
  FETCH_USERS_LIST_BEGIN,
  FETCH_USERS_LIST_SUCCESS,
  FETCH_USERS_LIST_FAILURE,
  SET_CURRENT_USER_ID
} from './users.constants';

/**
 * @typedef {import('redux').AnyAction} UsersAction
 */

/**
 * @description User
 * @typedef {{ login: string, id: number, node_id: string, avatar_url: string, gravatar_id: string, url: string, html_url: string, followers_url: string, following_url: string, gists_url: string, starred_url: string, subscriptions_url: string, organizations_url: string, repos_url: string, events_url: string, received_events_url: string, type: string, site_admin: bool, name: string, company: string, blog: string, location: string, email: any, hireable: any, bio: any, public_repos: number, public_gists: number, followers: number, following: number, created_at: Date, updated_at: Date}} User
 */

/**
 * @typedef {{byId: Object.<string, User>, allIds: string[], loading: boolean, currentUserId: User | null}} UsersState
 */

const usersInitialState = {
  byId: {},
  allIds: [],
  loading: false,
  currentUserId: null
};

/**
 * @function users
 * @type {import('redux').Reducer<UsersState, UsersAction>}
 * @param {UsersState} state
 * @param {UsersAction} action
 */
const users = (state = usersInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USERS_LIST_BEGIN:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_LIST_SUCCESS:
      return {
        ...state,
        byId: payload.entities.users,
        allIds: payload.result,
        loading: false
      };
    case FETCH_USERS_LIST_FAILURE:
      return {
        ...state,
        error: payload
      };
    case SET_CURRENT_USER_ID:
      return {
        ...state,
        currentUserId: payload
      };
    default:
      return state;
  }
};

export default users;
