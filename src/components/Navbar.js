import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #363636;
  box-shadow: 0px 1px 4px 1px #777;
  color: #fff;
  margin: -10px;
  margin-bottom: 10px;
  z-index: 3;
  min-height: 2.5em;
  font-size: 1.2rem;
`

const Navbar = (props) => (
  <StyledNav>
    {props.children}
  </StyledNav>
);

export default Navbar;