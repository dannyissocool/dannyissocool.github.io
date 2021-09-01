import React from 'react';
import './Projects.css';
import { Container, ItemGroup } from 'semantic-ui-react';

import Project from './Project/Project';
import pokedex from './Thumbnails/pokedex.jpg';
import gameLibrary from './Thumbnails/gameLibrary.jpg';
import paulWebsite from './Thumbnails/paulWebsite.jpg'

const Projects = () => {
  return (
    <section className='projects-section' id='portfolio'>
      <Container className='projects-container'>
        <h1 className='header'>Projects</h1>
        <ItemGroup divided className='projects'>
          <Project
            header="Paul Meuse Website"
            desc='Website I built for my brother to showcase his art.'
            repoLink='https://github.com/dannyissocool/paul-website'
            pagesLink='https://dannyissocool.github.io/paul-website/'
            imgSrc={paulWebsite}
          />
          <Project
            header='Pokedex'
            desc='Pokedex using PokeAPI built with React and Tailwind-CSS.'
            repoLink='https://github.com/dannyissocool/react-pokedex'
            pagesLink='https://dannyissocool.github.io/react-pokedex/'
            imgSrc={pokedex}
          />
          <Project
            header='Game Library'
            desc='Game search library built with React/Semantic-UI-React and the RAWG API.'
            repoLink='https://github.com/dannyissocool/gameLibrary'
            pagesLink='http://dannyissocool.github.io/gameLibrary'
            imgSrc={gameLibrary}
          />
          
        
        </ItemGroup>
      </Container>
    </section>
  );
};

export default Projects;
