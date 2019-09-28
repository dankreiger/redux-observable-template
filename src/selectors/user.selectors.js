import { createSelector } from 'reselect';

export const getUserReducer = state => state.userReducer;

export const selectUserDictionary = createSelector(
  [getUserReducer],
  ({ users }) => users
);

export const selectUserIds = createSelector(
  [getUserReducer],
  ({ userIds }) => userIds
);

export const selectUserList = createSelector(
  [selectUserDictionary, selectUserIds],
  (users, userIds) => userIds.map(id => users[id])
);

export const selectLoading = createSelector(
  [getUserReducer],
  ({ loading }) => loading
);

export const selectCurrentUser = createSelector(
  [getUserReducer],
  ({ currentUser }) => currentUser
);
