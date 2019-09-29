import {
  FETCH_URBAN_DICTIONARY_BEGIN,
  FETCH_URBAN_DICTIONARY_SUCCESS,
  FETCH_URBAN_DICTIONARY_FAILURE
} from './urbanDictionary.constants';

export const fetchUrbanDictionaryBegin = term => ({
  type: FETCH_URBAN_DICTIONARY_BEGIN,
  payload: term
});

export const fetchUrbanDictionarySuccess = term => ({
  type: FETCH_URBAN_DICTIONARY_SUCCESS,
  payload: term
});
export const fetchUrbanDictionaryFailure = error => ({
  type: FETCH_URBAN_DICTIONARY_FAILURE,
  payload: error
});
