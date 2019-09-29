import React from 'react';
import {
  AppWrapper,
  AppContentWrapper,
  AppNavigationWrapper
} from './App.styles';
import Headline from 'components/Headline';
import Routes from '../routes/Routes';
import Navigation from 'components/Navigation/Navigation';

function App() {
  return (
    <AppWrapper>
      <AppNavigationWrapper>
        <Navigation />
      </AppNavigationWrapper>
      <AppContentWrapper>
        <Headline />

        <Routes />
      </AppContentWrapper>
    </AppWrapper>
  );
}

export default App;
