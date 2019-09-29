export const setDictionary = (payload, name) => ({
  byId: payload.entities[name],
  allIds: payload.result
});
