import styled from 'styled-components';

export const UserDetailsWrapper = styled.div`
  position: fixed;
  width: 92%;
  max-width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s box-shadow;
  border-radius: 5px;
  background: white;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const UserDetailsImage = styled.img`
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: auto;
`;

export const UserDetailsContent = styled.div`
  padding: 40px;
  p,
  a {
    font-size: 1.5em !important;
  }
`;
