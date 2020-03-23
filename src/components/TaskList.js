import React from 'react';
import StyledTaskList from '../styles/StyledTaskList';
import Task from './Task';
import { connect } from 'react-redux';

const TaskList = (props) => (
  <StyledTaskList>
    {props.tasks.map((task) => {
      return <Task key={task.id} {...task} />
    })}
  </StyledTaskList>
);

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(TaskList);