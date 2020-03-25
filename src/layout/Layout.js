import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MobileSidebar from '../components/MobileSidebar';
import GlobalStyle from '../styles/GlobalStyle';
import StyledLayout from '../styles/StyledLayout';
import StyledMainScreen from '../styles/StyledMainScreen';

const Layout = (props) => {
  const [ sidebarToggled, setSidebarToggled] = useState(true);

  return (
    <StyledLayout>
      <GlobalStyle />
      <Sidebar />
      <MobileSidebar toggleSidebar={() => setSidebarToggled(!sidebarToggled)} sidebarToggled={sidebarToggled} />
      <StyledMainScreen>
        {props.children}
      </StyledMainScreen>
    </StyledLayout>
  )
};

export default Layout;