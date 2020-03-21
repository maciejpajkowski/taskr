import React from 'react';
import Sidebar from '../components/Sidebar';
import GlobalStyle from '../styles/GlobalStyle';
import StyledLayout from '../styles/StyledLayout';
import StyledMainScreen from '../styles/StyledMainScreen';

const Layout = (props) => (
  <StyledLayout>
    <GlobalStyle />
    <Sidebar />
    <StyledMainScreen>
      {props.children}
    </StyledMainScreen>
  </StyledLayout>
);

export default Layout;