import React, { useState } from 'react';
import Link from 'next/link';
import StyledMobileSidebar from '../styles/StyledMobileSidebar';

const MobileSidebar = () => {
  const [sidebarToggled, setSidebarToggled] = useState(false);

  return (
    <StyledMobileSidebar sidebarToggled={sidebarToggled}>
      <div>
        <h1>Taskr</h1>
        <button onClick={() => setSidebarToggled(!sidebarToggled)}>MENU</button>
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
    </StyledMobileSidebar>
  )
  
}

export default MobileSidebar;