import { connect } from 'react-redux';
import { func } from 'prop-types';
import { fetchUserBegin } from './node_modules/actions';
import UserSelectButton from './node_modules/components/UserSelectButton/UserSelectButton';

function mapStateToProps(state, ownProps) {
  return { login: ownProps.login };
}

const UserSelectButtonContainer = connect(
  mapStateToProps,
  { fetchUserBegin }
)(UserSelectButton);

UserSelectButtonContainer.propTypes = {
  fetchUserBegin: func
};

export default UserSelectButtonContainer;
