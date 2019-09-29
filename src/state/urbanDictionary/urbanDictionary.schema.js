import { schema } from 'normalizr';

export const urbanDictionarySchema = new schema.Entity(
  'urbanDictionary',
  undefined,
  { idAttribute: 'defid' }
);
export const urbanDictionaryListSchema = [urbanDictionarySchema];
