import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  width: 280px;
  background-color: #484848;
  color: #eee;

  a {
    text-decoration: none;
    color: #eee;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  h1, li {
    margin: 0;
    border-bottom: 1px solid #343434;
    padding: 20px;
  }

  li {
    font-weight: 600;
    list-style-type: none;
  }
`

const Sidebar = () => (
  <Container>
    <h1>Taskr</h1>
    <ul>
      <li>
        <Link href="/">
          <a>Overview</a>
        </Link>
      </li>
      <li><Link href="/create-task">
          <a>Create new task</a>
        </Link></li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </Container>
);

export default Sidebar;