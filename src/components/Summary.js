import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  color: #fff;
  background-color: #484848;
  flex-grow: 0.3;
  height: 50%;
  margin: 10px;
  box-shadow: 0px 1px 14px 1px #555;

  h1 {
    color: #eee;
    margin: 0;
    background-color: #363636;
    padding: 0.6em 20px;
  }

  p {
    padding: 0.6em 20px;
  }

  span {
    color: aqua;
  }
`

const Summary = (props) => (
  <Container>
    <h1>Summary</h1>
    <p>You currently have <span>{props.tasksToDo}</span> tasks to do, and completed <span>{props.tasksFinished}</span>.</p>
  </Container>
);

Summary.propTypes = {
  tasksToDo: PropTypes.number,
  tasksFinished: PropTypes.number
};

Summary.defaultProps = {
  tasksToDo: 0,
  tasksFinished: 0
};

export default Summary;