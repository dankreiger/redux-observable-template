import { combineReducers } from 'redux';
import users from './users/users.reducer';
import repos from './repos/repos.reducer';

export default combineReducers({
  users,
  repos
});
