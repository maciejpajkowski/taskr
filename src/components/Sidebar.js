import React from 'react';
import Link from 'next/link';
import StyledSidebar from '../styles/StyledSidebar';

const Sidebar = () => (
  <StyledSidebar>
    <div>
      <h1>Taskr</h1>
    </div>
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
    <span>Copyright © MP 2020</span>
  </StyledSidebar>
)

export default Sidebar;