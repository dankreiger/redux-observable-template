import React from 'react';
import { NavigationWrapper, StyledLink } from './Navigation.styles';
import { useLocation } from 'react-router-dom';
const Navigation = () => {
  const { pathname } = useLocation();
  const paths = {
    github: '/',
    urban: '/urban',
    starWars: '/star-wars'
  };
  return (
    <NavigationWrapper>
      <StyledLink active={paths.github === pathname} to="/">
        Github Followers
      </StyledLink>
      <StyledLink active={paths.urban === pathname} to="/urban">
        Urban Dictionary
      </StyledLink>
      <StyledLink active={paths.starWars === pathname} to="/star-wars">
        Star Wars
      </StyledLink>
    </NavigationWrapper>
  );
};

export default Navigation;
