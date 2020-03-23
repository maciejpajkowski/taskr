import React from 'react';
import StyledTask from '../styles/StyledTask';
import PropTypes from 'prop-types';

const Task = (props) => (
  <StyledTask>
    <h3>{props.taskName}</h3>
    <p>{props.taskDescription}</p>
    <p>{props.taskExp}exp</p>
  </StyledTask>
);

Task.propTypes = {
  taskName: PropTypes.string,
  taskDescription: PropTypes.string,
  taskExp: PropTypes.number
};

Task.defaultProps = {
  taskName: 'Unnamed task',
  taskDescription: 'No description has been specified',
  taskExp: 100
};

export default Task;