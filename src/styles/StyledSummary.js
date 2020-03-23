import styled from 'styled-components';

const StyledSummary = styled.div`
  color: #fff;
  background-color: #484848;
  flex-grow: 0.3;
  height: 20%;
  margin: 10px;
  box-shadow: 0px 1px 14px 1px #555;

  h1 {
    color: #eee;
    margin: 0;
    background-color: #363636;
    padding: 0.6em 20px;
  }

  p {
    padding: 0.6em 20px;
  }

  span {
    color: skyblue;
    font-weight: 600;
  }
`;

export default StyledSummary;