import React from 'react';
import './Projects.css';
import { Container } from 'semantic-ui-react';
import PlaceholderFluid from '../PlaceholderFluid';

const Projects = () => {
  return (
    <section className='projects-section' id='portfolio'>
      <Container className='projects-container'>
        <h1 className='header'>Past Projects</h1>
        <PlaceholderFluid className='top' />
        <PlaceholderFluid />
        <PlaceholderFluid />
        <PlaceholderFluid />
      </Container>
    </section>
  );
};

export default Projects;
