import React from 'react';
import './Projects.css';
import { Container, ItemGroup } from 'semantic-ui-react';
import PlaceholderFluid from '../PlaceholderFluid';
import Project from './Project/Project';

const Projects = () => {
  return (
    <section className='projects-section' id='portfolio'>
      <Container className='projects-container'>
        <h1 className='header'>Past Projects</h1>
        <ItemGroup divided className='projects'>
          <Project />
          <Project />
          <Project />
          <Project />
        </ItemGroup>
      </Container>
    </section>
  );
};

export default Projects;
