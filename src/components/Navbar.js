import React from 'react';
import StyledNavbar from '../styles/StyledNavbar';

const Navbar = (props) => (
  <StyledNavbar>
    {props.children}
  </StyledNavbar>
);

export default Navbar;