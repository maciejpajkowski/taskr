import styled from 'styled-components';

const StyledFrame = styled.div`
  color: #fff;
  background-color: #484848;
  flex-grow: 0;
  margin: 20px;
  box-shadow: 0px 1px 14px 1px #555;

  h1 {
    color: #eee;
    margin: 0;
    background-color: #363636;
    padding: 0.6em 20px;
  }

  p {
    padding: 0.1em 20px;

    &:last-child {
      padding-bottom: 30px;
    }
  }
`;

export default StyledFrame;