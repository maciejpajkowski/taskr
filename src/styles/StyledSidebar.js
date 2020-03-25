import styled from 'styled-components';

const StyledSidebar = styled.div`
  height: 100vh;
  min-width: 260px;
  background-color: #484848;
  color: #eee;
  scroll-behavior: none;
  z-index: 2;

  a {
    text-decoration: none;
    color: #eee;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    border-bottom: 1px solid #343434;
    padding: 0px 20px;
    background-color: #363636;

    h1 {
      display: inline-block;
    }

    button {
      background: none;
      border: 2 px solid #eee;
      border-radius: 10px;
      color: #eee;
      cursor: pointer;
      font-weight: 800;
    }
  }

  li {
    margin: 0;
    border-bottom: 1px solid #343434;
    padding: 20px;
    list-style-type: none;
    transition: all 0.3s;
  }

  li:hover {
    background-color: #555555;
    cursor: pointer;
    padding-left: 30px;
  }

  span {
    color: #333;
    position: absolute;
    left: 20px;
    bottom: 20px;
  }

  @media (max-width: 45rem) {
    display: none;
  }
`;

export default StyledSidebar;