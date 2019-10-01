import { urbanDictionaryHttpReducer } from './urbanDictionary.constants';

const urbanDictionaryInitialState = {
  byId: {},
  allIds: []
};
const urbanDictionary = (state = urbanDictionaryInitialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default urbanDictionaryHttpReducer(urbanDictionary);
