import React, { useEffect, useMemo, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { any, arrayOf, bool, func } from 'prop-types';
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  config
} from 'react-spring';

import { fetchUsersBegin } from 'state/users/users.actions';

import {
  selectUsers,
  selectUsersLoading,
  selectCurrentUser,
  selectUsersError
} from 'state/users/users.selectors';
import { createStructuredSelector } from 'reselect';
import UserProptypes from 'types/User.proptypes';

import {
  UsersWrapper,
  UsersPageSelectButtonsWrapper
} from './UsersPage.styles';
import UserSelectButton from 'components/UserSelectButton/UserSelectButton';
import UserDetails from 'components/UserDetails/UserDetails';
import Spinner from 'components/Spinner/Spinner';

const UsersPage = ({
  currentUserId,
  users,
  loading,
  fetchUsersBegin,
  error
}) => {
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
  useEffect(() => {
    fetchUsersBegin();
  }, [fetchUsersBegin]);

  useEffect(() => {
    if (usersPresent) {
      set(true);
    }
  }, [users, open]);

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
        {/* <button onClick={fetchReposBegin}>show all repos</button> */}
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

UsersPage.propTypes = {
  currentUserId: UserProptypes,
  users: arrayOf(UserProptypes),
  loading: bool,
  fetchUsersBegin: func.isRequired,
  error: any
};

UsersPage.defaultProps = {
  loading: false,
  currentUserId: null,
  users: null,
  error: null
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
  loading: selectUsersLoading,
  currentUserId: selectCurrentUser,
  error: selectUsersError
});

export default connect(
  mapStateToProps,
  { fetchUsersBegin }
)(UsersPage);
