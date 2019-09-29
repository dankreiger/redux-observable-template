import React from 'react';
import {
  UserDetailsWrapper,
  UserDetailsImage,
  UserDetailsContent
} from './UserDetails.styles';
import UserProptypes from 'types/User.proptypes';
import { Text } from 'puppy-components';

const UserDetails = ({ user }) => {
  const { avatar_url, html_url, login } = user;
  return (
    <UserDetailsWrapper>
      <UserDetailsImage alt={login} src={avatar_url} />
      <UserDetailsContent>
        <Text text={login} />
        <a href={html_url}>github</a>
      </UserDetailsContent>
    </UserDetailsWrapper>
  );
};

UserDetails.propTypes = {
  user: UserProptypes
};

export default UserDetails;
