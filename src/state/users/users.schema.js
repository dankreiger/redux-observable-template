import { schema } from 'normalizr';

export const userSchema = new schema.Entity('users');
export const repoSchema = new schema.Entity('repos');
export const userListSchema = [userSchema];
export const userListReposSchema = [repoSchema];
