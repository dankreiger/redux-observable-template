export const setDictionary = ({ entities, result }, reducerName) => ({
  byId: entities[reducerName],
  allIds: result
});

export const clearDictionary = () => ({
  byId: {},
  allIds: []
});
