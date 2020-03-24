import React from 'react';
import StyledNavbar from '../styles/StyledNavbar';
import { connect } from 'react-redux';

const Navbar = (props) => (
  <StyledNavbar>
    {props.tasks.length > 0 ? 
    `Amount of things to get done: ${props.tasks.length}` : "Nothing to do!" }
  </StyledNavbar>
);

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

export default connect(mapStateToProps)(Navbar);