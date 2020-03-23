import React from 'react';
import StyledFrame from '../styles/StyledFrame';

const About = () => (
  <StyledFrame>
    <h1>About</h1>
    <p>
      This is a simple task management app created by Maciej Pajkowski.
      <br/> 
      The goal of this project was to create a basic To-Do application 
      using React with Redux.
    </p>
    <p>
      Redux obviously isn't a very good choice for such small application
      and may seem like an overkill, however practice makes perfect, so - why not?
    </p>
    <p>Current version: 0.0.0.1 (still very much WIP).</p>
  </StyledFrame>
);

export default About;