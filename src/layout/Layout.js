import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: #fff;
    font-family: 'Verdana';
    box-sizing: border-box;
  }
`;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  margin: 0;
`;

const StyledMain = styled.div`
  background-color: #999;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
`;

const Layout = (props) => (
  <StyledLayout>
    <GlobalStyle />
    <Sidebar />
    <StyledMain>
      {props.children}
    </StyledMain>
  </StyledLayout>
);

export default Layout;