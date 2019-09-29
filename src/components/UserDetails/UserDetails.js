import React from 'react';
import { useSpring } from 'react-spring';

import {
  UserDetailsWrapper,
  UserDetailsImage,
  UserDetailsContent
} from './UserDetails.styles';
import UserProptypes from 'types/User.proptypes';
import { Text } from 'puppy-components';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const UserDetails = ({ user }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  const { avatar_url, html_url, login } = user;

  return (
    <UserDetailsWrapper
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
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
