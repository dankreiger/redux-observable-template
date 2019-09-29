import React from 'react';
import {
  SpinnerOuterWrapper,
  SpinnerOverlay,
  SpinnerWrapper
} from './Spinner.styles';

const Spinner = () => (
  <SpinnerOuterWrapper>
    <SpinnerOverlay>
      <SpinnerWrapper />
    </SpinnerOverlay>
  </SpinnerOuterWrapper>
);

export default Spinner;
