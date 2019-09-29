import styled from 'styled-components';

export const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;
