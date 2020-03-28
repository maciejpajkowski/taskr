import styled from 'styled-components';

const StyledTask = styled.div`
  color: #fff;
  background-color: #484848;
  flex-grow: 0;
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
    word-break: break-all;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      min-width: 7rem;
    }
  }

  p {
    padding: 0.6em 20px;
    word-break: break-all;
  }

  button {
    background: none;
    border: 0;
    color: #777;
    font-weight: 800;
    font-size: 1rem;
    transition: all 0.3s;
    margin-left: 1rem;

    &:hover {
      color: #006611;
      cursor: pointer;
    }
  }

  a {
    text-decoration-line: none;
    color: #aaa;
    font-size: 1rem;
    margin-left: 1rem;
    transition: all 0.3s;

    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
`;

export default StyledTask