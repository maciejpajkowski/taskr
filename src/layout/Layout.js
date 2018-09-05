import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
// probs delete
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { createTask } from '../actions/tasksActions';

const store = configureStore();
store.dispatch(createTask({ id: 321, description: 'Build a new app' }));

// /probs delete

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
  <Provider store={store}>
    <StyledLayout>
      <Sidebar />
      <StyledMain>
        {props.children}
      </StyledMain>
    </StyledLayout>
  </Provider>
  
);
// remove the Provider from here
export default Layout;