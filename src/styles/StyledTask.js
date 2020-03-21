import styled from 'styled-components';

const StyledTask = styled.div`
  color: #fff;
  background-color: #484848;
  flex-grow: 0;
  height: 100%;
  width: 300px;
  margin: 10px;
  box-shadow: 0px 1px 4px 1px #777;

  h3 {
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

export { StyledTask as default }