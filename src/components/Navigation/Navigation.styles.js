import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  background: #000;
  color: white;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  left: 0;
  top: 0;
  height: 60px;
  z-index: 1;

  a,
  a:visited {
    font-size: 1.2em;
    margin-right: 30px;
    color: white;
  }
`;
