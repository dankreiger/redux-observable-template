import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationWrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Link to="/">Github Followers</Link>
      <Link to="/urban">Urban Dictionary</Link>
    </NavigationWrapper>
  );
};

export default Navigation;
