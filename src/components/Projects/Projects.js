import React from 'react';
import './Projects.css';
import { Container, ItemGroup } from 'semantic-ui-react';
import PlaceholderFluid from '../PlaceholderFluid';
import Project from './Project/Project';
import pokedex from './Thumbnails/pokedex.jpg';
import gameLibrary from './Thumbnails/gameLibrary.jpg';

const Projects = () => {
  return (
    <section className='projects-section' id='portfolio'>
      <Container className='projects-container'>
        <h1 className='header'>Past Projects</h1>
        <ItemGroup divided className='projects'>
          <Project
            header='Pokedex'
            desc='Basic pokedex using PokeAPI built with React and Tailwind-CSS'
            repoLink='https://github.com/dannyissocool/react-pokedex'
            pagesLink='https://dannyissocool.github.io/react-pokedex/'
            imgSrc={pokedex}
          />
          <Project
            header='Game Library'
            desc='Game search library built with React/Semantic-UI-React and the RAWG API'
            repoLink='https://github.com/dannyissocool/gameLibrary'
            pagesLink='http://dannyissocool.github.io/gameLibrary'
            imgSrc={gameLibrary}
          />
          <Project />
          <Project />
        </ItemGroup>
      </Container>
    </section>
  );
};

export default Projects;
