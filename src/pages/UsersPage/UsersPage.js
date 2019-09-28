import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, bool, func } from 'prop-types';
import { fetchUserListBegin } from 'actions';
import * as selectors from 'selectors';
import { createStructuredSelector } from 'reselect';
import { UsersWrapper } from './UsersPage.styles';
import UserSelectButton from 'components/UserSelectButton/UserSelectButton';
import UserDetails from 'components/UserDetails/UserDetails';
import UserProptypes from 'types/User.proptypes';

const UsersPage = ({ currentUser, userList, loading, fetchUserListBegin }) => {
  useEffect(() => {
    fetchUserListBegin();
  }, [fetchUserListBegin]);
  return (
    <UsersWrapper>
      <div>
        {userList.map(user => (
          <UserSelectButton key={user.id} user={user} />
        ))}
      </div>
      <div>
        {loading && <h3>loading...</h3>}
        {currentUser && <UserDetails user={currentUser} />}
      </div>
    </UsersWrapper>
  );
};

UsersPage.propTypes = {
  currentUser: UserProptypes,
  userList: arrayOf(UserProptypes),
  loading: bool,
  fetchUserListBegin: func.isRequired
};

UsersPage.defaultProps = {
  loading: false,
  currentUser: null,
  userList: null
};

const mapStateToProps = createStructuredSelector({
  userList: selectors.selectUserList,
  loading: selectors.selectLoading,
  currentUser: selectors.selectCurrentUser
});

export default connect(
  mapStateToProps,
  { fetchUserListBegin }
)(UsersPage);
