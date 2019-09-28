import React from 'react';
import { Heading } from 'puppy-components';

const Headline = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '40px'
      }}
    >
      <Heading tag="h1" text="Redux Observable"></Heading>
    </div>
  );
};

export default Headline;
