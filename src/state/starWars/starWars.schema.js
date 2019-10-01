import { schema } from 'normalizr';
import { starWarsReducerName } from './starWars.constants';

export const starWarsSchema = new schema.Entity(
  starWarsReducerName,
  undefined,
  {
    idAttribute: value => value.url.match(/\d+/g).pop()
  }
);
export const starWarsListSchema = [starWarsSchema];
