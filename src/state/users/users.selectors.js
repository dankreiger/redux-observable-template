import { createSelector } from 'reselect';

export const getUsersReducer = state => state.users;

export const selectUsersDictionary = createSelector(
  [getUsersReducer],
  ({ byId }) => byId
);

export const selectUsersIds = createSelector(
  [getUsersReducer],
  ({ allIds }) => allIds
);

export const selectUsers = createSelector(
  [selectUsersDictionary, selectUsersIds],
  (users, userIds) => userIds.map(id => users[id])
);

export const selectUsersLoading = createSelector(
  [getUsersReducer],
  ({ loading }) => loading
);

export const selectUsersError = createSelector(
  [getUsersReducer],
  ({ httpError }) => httpError
);

export const selectCurrentUser = createSelector(
  [selectUsersDictionary, getUsersReducer],
  (users, { currentUserId }) => users[currentUserId]
);
