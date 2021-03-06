import { SET_CURRENT_USER_ID } from './../users.constants';

test('users constants', () => {
  expect(SET_CURRENT_USER_ID).toEqual('[Users] SET_CURRENT_USER_ID');
});
