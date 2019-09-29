import { combineReducers } from 'redux';
import users from './users/users.reducer';
import repos from './repos/repos.reducer';
import urbanDictionary from './urbanDictionary/urbanDictionary.reducer';
export default combineReducers({
  users,
  repos,
  urbanDictionary
});
