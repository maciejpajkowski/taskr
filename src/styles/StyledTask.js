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
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #eee;
    margin: 0;
    background-color: #363636;
    padding: 0.6em 20px;
  }

  p {
    padding: 0.6em 20px;
  }

  button {
    background: none;
    border: 0;
    color: #777;
    font-weight: 800;
    font-size: 1rem;
    transition: all 0.3s;

    &:hover {
      color: red;
      transform: translateZ(10px);
      cursor: pointer;
    }
  }
`;

export default StyledTask