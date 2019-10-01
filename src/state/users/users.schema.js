import { schema } from 'normalizr';
import { usersReducerName } from './users.constants';

export const userSchema = new schema.Entity(usersReducerName);
export const usersSchema = [userSchema];
