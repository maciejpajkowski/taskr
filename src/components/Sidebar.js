import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  width: 280px;
  background-color: #484848;
  color: #eee;
  position: relative;

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
    <span>Copyright © MP</span>
  </Container>
);

export default Sidebar;