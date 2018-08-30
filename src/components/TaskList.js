import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  color: #fff;
  background-color: #484848;
  flex-grow: 1;
  margin: 10px;
  box-shadow: 0px 1px 14px 1px #555;

  h1 {
    color: #eee;
    margin: 0;
    background-color: #363636;
    padding: 0.6em 20px;
  }

  section {
    display: flex;
    flex-direction: row;
  }
`;

export default class TaskList extends React.Component {
  render() {
    return (
      <Container>
        <h1>Tasks</h1>
        <section>
          {this.props.children}
        </section>
      </Container>
    )
  }
};

