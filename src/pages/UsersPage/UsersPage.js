import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  config
} from 'react-spring';

import {
  selectUsers,
  selectUsersLoading,
  selectCurrentUser,
  selectUsersError
} from 'state/users/users.selectors';

import {
  UsersWrapper,
  UsersPageSelectButtonsWrapper
} from './UsersPage.styles';
import UserSelectButton from 'components/UserSelectButton/UserSelectButton';
import UserDetails from 'components/UserDetails/UserDetails';
import Spinner from 'components/Spinner/Spinner';
import { usersHttpBegin } from 'state/users/users.constants';

const UsersPage = () => {
  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);
  const currentUserId = useSelector(selectCurrentUser);
  const error = useSelector(selectUsersError);
  const [open, set] = useState(false);

  const springRef = useRef();
  const transRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: { size: open ? '100%' : '20%', background: open ? 'white' : 'hotpink' }
  });
  const transitions = useTransition(open ? users : [], item => item.id, {
    ref: transRef,
    unique: true,
    trail: 400 / users.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  });

  const usersPresent = useMemo(() => Object.keys(users).length, [users]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersHttpBegin());
  }, [dispatch]);

  useEffect(() => {
    if (usersPresent) {
      set(true);
    }
  }, [users, open, usersPresent]);

  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6
  ]);
  if (error) {
    throw new Error(error);
  }
  return (
    <UsersWrapper>
      <UsersPageSelectButtonsWrapper
        style={{
          ...rest,
          width: size,
          height: size
        }}
      >
        {transitions.map(({ item, key, props }) => {
          return (
            <animated.div key={key} style={{ ...props }}>
              <UserSelectButton user={item} />
            </animated.div>
          );
        })}
      </UsersPageSelectButtonsWrapper>
      <div>
        {loading && <Spinner />}
        {currentUserId && <UserDetails user={currentUserId} />}
      </div>
    </UsersWrapper>
  );
};

export default UsersPage;
