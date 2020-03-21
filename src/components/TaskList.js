import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
`;

const TaskList = (props) => (
  <Container>
    {props.children}
  </Container>
);

export { TaskList as default }

