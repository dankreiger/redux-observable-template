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

export const selectUsersList = createSelector(
  [selectUsersDictionary, selectUsersIds],
  (users, userIds) => userIds.map(id => users[id])
);

export const selectLoading = createSelector(
  [getUsersReducer],
  ({ loading }) => loading
);

export const selectCurrentUser = createSelector(
  [selectUsersDictionary, getUsersReducer],
  (users, { currentUserId }) => users[currentUserId]
);
