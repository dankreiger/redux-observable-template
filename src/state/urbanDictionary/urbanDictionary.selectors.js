import { createSelector } from 'reselect';

export const getUrbanDictionaryReducer = state => state.urbanDictionary;

export const selectUrbanDictionary = createSelector(
  [getUrbanDictionaryReducer],
  ({ byId }) => byId
);

export const selectUrbanDictionaryItemIds = createSelector(
  [getUrbanDictionaryReducer],
  ({ allIds }) => allIds
);
export const selectUrbanDictionaryLoading = createSelector(
  [getUrbanDictionaryReducer],
  ({ loading }) => loading
);

export const selectUrbanDictionaryError = createSelector(
  [getUrbanDictionaryReducer],
  ({ httpError }) => httpError
);

export const selectUrbanDictionaryItems = createSelector(
  [selectUrbanDictionary, selectUrbanDictionaryItemIds],
  (items, itemsIds) => itemsIds.map(id => items[id])
);
