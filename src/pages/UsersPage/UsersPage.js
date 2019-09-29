import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, bool, func } from 'prop-types';
import { fetchUsersListBegin } from 'state/users/users.actions';
import {
  selectUsersList,
  selectLoading,
  selectCurrentUser
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
  userList,
  loading,
  fetchUsersListBegin,
  fetchReposListBegin
}) => {
  useEffect(() => {
    fetchUsersListBegin();
  }, [fetchUsersListBegin]);
  return (
    <UsersWrapper>
      <div>
        {/* <button onClick={fetchReposListBegin}>show all repos</button> */}

        {userList.map(user => (
          <UserSelectButton key={user.id} user={user} />
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
  userList: arrayOf(UserProptypes),
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
  userList: selectUsersList,
  loading: selectLoading,
  currentUserId: selectCurrentUser
});

export default connect(
  mapStateToProps,
  { fetchUsersListBegin, fetchReposListBegin }
)(UsersPage);
