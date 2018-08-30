import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #fff;
  background-color: #484848;
  flex-grow: 0.3;
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
    color: skyblue;
    font-weight: 600;
  }
`;

const About = () => (
  <Container>
    <h1>About</h1>
    <p>This is a simple task management app created by Matthias Parker.<br/> The goal of this project was to create a working application,
    connected to a database of tasks, <br/> which would also serve in an RPG-like way (hence the levels and experience points).</p>
    <p>Current version: 0.0.0.1 (still very much WIP).</p>
    <p>Enjoy!</p>
  </Container>
);

export default About;