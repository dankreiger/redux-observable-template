import { urbanDictionaryReducerName as name } from './urbanDictionary.constants';
import { withHttpReducer } from 'state/utils/higherOrderReducers/withHttpReducer.reducer';

const urbanDictionaryInitialState = {
  byId: {},
  allIds: [],
  loading: false
};
const urbanDictionary = (state = urbanDictionaryInitialState, action) => {
  const { type } = action;
  switch (type) {
    // case SET_CURRENT_USER_ID:
    //   return {
    //     ...state,
    //     currentUserId: payload
    //   };
    default:
      return state;
  }
};

export default withHttpReducer(urbanDictionary, name);
