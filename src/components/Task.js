import React from 'react';
import StyledTask from '../styles/StyledTask';
import PropTypes from 'prop-types';

const Task = ({ name, description }) => (
  <StyledTask>
    <h3>{name}</h3>
    <p>{description}</p>
  </StyledTask>
);

Task.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};

Task.defaultProps = {
  name: 'Unnamed task',
  description: 'No description has been specified'
};

export default Task;