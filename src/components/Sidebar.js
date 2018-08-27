import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  position: fixed;
  width: 300px;
  background-color: #555;
  color: #eee;

  li, a {
    text-decoration: none;
    color: #eee;
  }
`

const Sidebar = () => (
  <StyledSidebar>
    <ul>
      <li>
        <Link href="/">
          <a>Overview</a>
        </Link>
      </li>
      <li>Create new task</li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </StyledSidebar>
);

export default Sidebar;