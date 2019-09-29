import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { arrayOf, bool, func, number } from 'prop-types';
import { animated, useTrail } from 'react-spring';
import { fetchUsersListBegin } from 'state/users/users.actions';
import {
  selectUsersList,
  selectLoading,
  selectCurrentUser,
  selectUsersIds
} from 'state/users/users.selectors';
import { createStructuredSelector } from 'reselect';
import { UsersWrapper } from './UsersPage.styles';
import UserSelectButton from 'components/UserSelectButton/UserSelectButton';
import UserDetails from 'components/UserDetails/UserDetails';
import UserProptypes from 'types/User.proptypes';
import Spinner from 'components/Spinner/Spinner';
import { fetchReposListBegin } from 'state/repos/repos.actions';

const UsersPage = ({
  currentUserId,
  usersList,
  usersIds,
  loading,
  fetchUsersListBegin,
  fetchReposListBegin
}) => {
  const [on, toggle] = useState(false);

  useEffect(() => {
    fetchUsersListBegin();
  }, [fetchUsersListBegin]);

  useEffect(() => {
    if (Object.keys(usersList).length) {
      toggle(true);
    }
  }, [usersList, on]);

  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(usersIds.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    margin: 20,
    from: { opacity: 0, x: 20, height: 0 }
  });
  return (
    <UsersWrapper>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gridGap: '20px'
        }}
      >
        {/* <button onClick={fetchReposListBegin}>show all repos</button> */}

        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={usersList[index].id}
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <animated.div style={{ height }}>
              <UserSelectButton user={usersList[index]} />
            </animated.div>
          </animated.div>
        ))}
      </div>
      <div>
        {loading && <Spinner />}
        {currentUserId && <UserDetails user={currentUserId} />}
      </div>
    </UsersWrapper>
  );
};

UsersPage.propTypes = {
  currentUserId: UserProptypes,
  usersList: arrayOf(UserProptypes),
  usersIds: arrayOf(number),
  loading: bool,
  fetchUsersListBegin: func.isRequired,
  fetchReposListBegin: func.isRequired
};

UsersPage.defaultProps = {
  loading: false,
  currentUserId: null,
  userList: null
};

const mapStateToProps = createStructuredSelector({
  usersList: selectUsersList,
  usersIds: selectUsersIds,
  loading: selectLoading,
  currentUserId: selectCurrentUser
});

export default connect(
  mapStateToProps,
  { fetchUsersListBegin, fetchReposListBegin }
)(UsersPage);
