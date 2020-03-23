import React from 'react';
import StyledTaskList from '../styles/StyledTaskList';

const TaskList = (props) => (
  <StyledTaskList>
    {props.children}
  </StyledTaskList>
);

export default TaskList;