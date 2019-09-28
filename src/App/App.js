import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { fetchUserListBegin } from 'actions';
import { AppWrapper } from './App.styles';
import Headline from 'components/Headline';
import Routes from '../routes/Routes';

function App({ fetchUserListBegin }) {
  useEffect(() => {
    fetchUserListBegin();
  }, [fetchUserListBegin]);
  console.log('rendered');
  return (
    <AppWrapper>
      <Headline />
      <Routes />
    </AppWrapper>
  );
}

App.propTypes = {
  fetchUserListBegin: func
};

export default connect(
  null,
  { fetchUserListBegin }
)(App);
