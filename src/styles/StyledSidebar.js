import styled from 'styled-components';

const StyledSidebar = styled.div`
  min-width: 260px;
  background-color: #484848;
  color: #eee;
  position: relative;
  z-index: 4;
  scroll-behavior: none;

  a {
    text-decoration: none;
    color: #eee;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  h1 {
    background-color: #363636;
  }

  h1, li {
    margin: 0;
    border-bottom: 1px solid #343434;
    padding: 20px;
  }

  li {
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
`;

export default StyledSidebar;