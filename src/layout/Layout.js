import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

const Layout = (props) => (
  <StyledLayout>
    <Sidebar />
    {props.children}
  </StyledLayout>
);

export default Layout;