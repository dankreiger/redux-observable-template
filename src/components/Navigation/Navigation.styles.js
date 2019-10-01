import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationWrapper = styled.div`
  background: #000;
  color: white;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  left: 0;
  top: 0;
  height: 60px;
  z-index: 1;
`;
export const StyledLink = styled(Link)`
  font-size: 1.2em;
  margin-right: 30px;
  transition: color 250ms, background-color 250ms;
  color: ${({ active }) => (active ? 'black' : 'white')};
  background-color: ${({ active }) => (active ? 'white' : 'black')};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 20px;
`;
