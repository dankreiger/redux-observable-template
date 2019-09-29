import React from 'react';
import { AppWrapper } from './App.styles';
import Headline from 'components/Headline';
import Routes from '../routes/Routes';

function App() {
  return (
    <AppWrapper>
      <Headline />
      <Routes />
    </AppWrapper>
  );
}

export default App;
