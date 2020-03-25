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
    <p>
      It currently does not save data in any way, so once the page is refreshed - 
      the data is gone, sadly. However, since this project was waiting over a year
      for me to actually understand Redux and finish it in a most basic state, 
      the current form of it is acceptable for me.
    </p>
    <p>Current version: 0.9.0</p>
    <p>
      To do: Fix RWD
    </p>
  </StyledFrame>
);

export default About;