import { createSelector } from 'reselect';

export const getStarWarsState = state => state.starWars;

export const selectStarWarsDictionary = createSelector(
  [getStarWarsState],
  ({ byId }) => byId
);

export const selectStarWarsItemIds = createSelector(
  [getStarWarsState],
  ({ allIds }) => allIds
);
export const selectStarWarsLoading = createSelector(
  [getStarWarsState],
  ({ loading }) => loading
);

export const selectStarWarsError = createSelector(
  [getStarWarsState],
  ({ httpError }) => httpError
);

export const selectStarWarsItems = createSelector(
  [selectStarWarsDictionary, selectStarWarsItemIds],
  (items, itemsIds) => {
    return itemsIds ? itemsIds.map(id => items[id]) : [];
  }
);
