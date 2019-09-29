import { httpActionTypes } from '../helpers/actionTypeFormatters';
import { clearDictionary, setDictionary } from '../helpers/dictionary';

const initialState = {
  loading: false,
  error: null
};

export function withHttpReducer(reducer, name) {
  return (state, action) => {
    const { BEGIN, SUCCESS, FAILURE } = httpActionTypes(name);
    const { type, payload } = action;
    const combinedState = { ...initialState, ...state };
    switch (type) {
      case BEGIN:
        return {
          ...combinedState,
          loading: true,
          error: null
        };
      case SUCCESS:
        return {
          ...combinedState,
          ...setDictionary(payload, name),
          loading: false
        };
      case FAILURE:
        return {
          ...combinedState,
          ...clearDictionary(),
          error: payload
        };
      default:
        return reducer(state, action);
    }
  };
}
