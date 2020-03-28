import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  margin: 0;

  @media (max-width: 45rem) {
    flex-direction: column;
    height: 100%;
  }
`;

export default StyledLayout;