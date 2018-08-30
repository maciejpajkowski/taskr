import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  color: #fff;
  background-color: #484848;
  flex-grow: 0;
  margin: 10px;
  box-shadow: 0px 1px 14px 1px #222;

  h3 {
    color: #eee;
    margin: 0;
    background-color: #363636;
    padding: 0.6em 20px;
  }

  p {
    padding: 0.6em 20px;
  }

  span {
    color: skyblue;
    font-weight: 600;
  }
`;

export default class Task extends React.Component {
  render() {
    return (
      <Container>
        <h3>{this.props.taskName}</h3>
        <p>{this.props.taskDescription}</p>
        <p>{this.props.taskExp}exp</p>
      </Container>
    );
  }
};

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