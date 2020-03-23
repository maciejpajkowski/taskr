import React from 'react';
import StyledSummary from '../styles/StyledSummary';
import PropTypes from 'prop-types';

const Summary = (props) => (
  <StyledSummary>
    <h1>Summary</h1>
    <p>You currently have <span>{props.tasksToDo}</span> tasks to do and <span>{props.tasksFinished}</span> completed.</p>
    <p>Level: <span>{props.level}</span></p>
  </StyledSummary>
);

Summary.propTypes = {
  tasksToDo: PropTypes.number,
  tasksFinished: PropTypes.number,
  level: PropTypes.number
};

Summary.defaultProps = {
  tasksToDo: 0,
  tasksFinished: 0,
  level: 1
};

export default Summary;