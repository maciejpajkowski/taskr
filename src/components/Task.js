import React from 'react';
import StyledTask from '../styles/StyledTask';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTask } from '../actions/tasksActions';

const Task = (props) => {
  return (
    <StyledTask>
      <div>
        <h3>
          {props.name}
          <button onClick={() => props.removeTask(props.id)}>X</button>
        </h3>
      </div>
      <p>{props.description}</p>
    </StyledTask>
  );
}

Task.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};

Task.defaultProps = {
  name: 'Unnamed task',
  description: 'No description has been specified'
};

const mapDispatchToProps = (dispatch) => ({
  removeTask: (id) => dispatch(removeTask(id))
});

export default connect(undefined, mapDispatchToProps)(Task);