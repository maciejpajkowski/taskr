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

const StyledMain = styled.div`
  background-color: #999;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding: 10px;
`;

const Layout = (props) => (
  <StyledLayout>
    <Sidebar />
    <StyledMain>
      {props.children}
    </StyledMain>
  </StyledLayout>
);

export default Layout;