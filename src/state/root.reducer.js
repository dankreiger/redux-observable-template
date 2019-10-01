import { combineReducers } from 'redux';
import users from './users/users.reducer';
import urbanDictionary from './urbanDictionary/urbanDictionary.reducer';
import starWars from './starWars/starWars.reducer';
export default combineReducers({
  starWars,
  users,
  urbanDictionary
});
