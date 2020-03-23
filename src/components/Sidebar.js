import React from 'react';
import Link from 'next/link';
import StyledSidebar from '../styles/StyledSidebar';

const Sidebar = () => (
  <StyledSidebar>
    <h1>Taskr</h1>
    <ul>
      <Link href="/">
        <a>
          <li>
            Overview
          </li>
        </a>
      </Link>
      <Link href="/create-task">
        <a>
          <li>
            Create a new task
          </li>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <li>
            About
          </li>
        </a>
      </Link>
    </ul>
    <span>Copyright © MP</span>
  </StyledSidebar>
);

export default Sidebar;