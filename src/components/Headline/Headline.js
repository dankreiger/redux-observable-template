import React from 'react';
import { Heading } from 'puppy-components';

const Headline = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '40px'
      }}
    >
      fix puppy components or make a new one
      <Heading tag="h1" text="Redux Observable"></Heading>
    </div>
  );
};

export default Headline;
