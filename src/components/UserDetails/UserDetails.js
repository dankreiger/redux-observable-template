import React from 'react';
import { UserDetailsWrapper } from './UserDetails.styles';
import UserProptypes from 'types/User.proptypes';
import { Text } from 'puppy-components';

const UserDetails = ({ user }) => {
  const { avatar_url, url, login } = user;
  return (
    <UserDetailsWrapper>
      <img alt={login} src={avatar_url} />
      <div>
        <Text text={login} />
        <a href={url}>github</a>
      </div>
    </UserDetailsWrapper>
  );
};

UserDetails.propTypes = {
  user: UserProptypes
};

export default UserDetails;
