import React from 'react';
import { Heading } from 'puppy-components';
import { useLocation } from 'react-router-dom';

const Headline = () => {
  const { pathname } = useLocation();
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
      <Heading
        tag="h1"
        text={`Redux ${pathname.includes('star-wars') ? 'Saga' : 'Observable'}`}
      ></Heading>
    </div>
  );
};

export default Headline;
