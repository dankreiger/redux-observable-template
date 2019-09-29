export const setDictionary = (payload, name) => ({
  byId: payload.entities[name],
  allIds: payload.result
});

export const clearDictionary = () => ({
  byId: {},
  allIds: []
});
