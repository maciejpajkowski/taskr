import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  color: #fff;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export default class TaskList extends React.Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }
};

