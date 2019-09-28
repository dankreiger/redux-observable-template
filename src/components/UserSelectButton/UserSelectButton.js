import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentUser } from 'actions';

import { UserSelectButtonWrapper } from './UserSelectButton.styles';
import { Button } from 'puppy-components';
import UserProptypes from 'types/User.proptypes';

const UserSelectButton = ({ user, setCurrentUser }) => {
  return (
    <UserSelectButtonWrapper>
      <Button
        size="large"
        onClick={() => setCurrentUser(user.id)}
        text={user.login}
      ></Button>
    </UserSelectButtonWrapper>
  );
};

UserSelectButton.propTypes = {
  setCurrentUser: func.isRequired,
  user: UserProptypes.isRequired
};

export default connect(
  null,
  { setCurrentUser }
)(UserSelectButton);
