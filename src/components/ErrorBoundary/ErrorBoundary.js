import React, { Component } from 'react';

import {
  ErrorImageOverlay,
  ErrorImageWrapper,
  ErrorImageText
} from './ErrorBoundary.styles';
import errorDog from './errorDog.png';
class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true, error };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    if (this.state.hasErrored) {
      const { error } = this.state;
      return (
        <ErrorImageOverlay>
          <ErrorImageWrapper imageUrl={errorDog} />
          <ErrorImageText>
            The puppy ate this page and it's broken. Sorry.
          </ErrorImageText>
          <ErrorImageText>
            <small>Error Message:</small>{' '}
            {error && error.message && error.message}
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
