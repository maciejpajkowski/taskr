import styled from 'styled-components';

const StyledMainScreen = styled.div`
  display: flex;
  height: 100vh;
  background-color: #999;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 45rem) {
    margin-top: 60px;
  }
`;

export default StyledMainScreen;