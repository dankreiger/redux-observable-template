import { schema } from 'normalizr';
import { urbanDictionaryReducerName } from './urbanDictionary.constants';

export const urbanDictionarySchema = new schema.Entity(
  urbanDictionaryReducerName,
  undefined,
  { idAttribute: 'defid' }
);
export const urbanDictionaryListSchema = [urbanDictionarySchema];
