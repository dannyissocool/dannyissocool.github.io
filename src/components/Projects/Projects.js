import React from 'react';
import './Projects.css';
import { Container, ItemGroup } from 'semantic-ui-react';

import Project from './Project/Project';
import pokedex from './Thumbnails/pokedex.jpg';
import gameOfLife from './Thumbnails/gameOfLife.jpg';
import paulWebsite from './Thumbnails/paulWebsite.jpg'

const Projects = () => {
  return (
    <section className='projects-section' id='portfolio'>
      <Container className='projects-container'>
        <h1 className='header'>Projects</h1>
        <ItemGroup divided className='projects'>
          <Project
            header="Paul Meuse Website"
            desc='Website I built for my brother to showcase his art. Built with React+Styled Components and the Imgur API'
            repoLink='https://github.com/dannyissocool/paul-website'
            pagesLink='https://dannyissocool.github.io/paul-website/'
            imgSrc={paulWebsite}
          />
          <Project
            header='Pokedex'
            desc='Pokedex built with React and Tailwind-CSS and using data from the PokeAPI.'
            repoLink='https://github.com/dannyissocool/react-pokedex'
            pagesLink='https://dannyissocool.github.io/react-pokedex/'
            imgSrc={pokedex}
          />
          <Project
            header='Game of Life'
            desc="Game of Life built in React with adjustable grid size. Inspired by Ben Awad's version."
            repoLink='https://github.com/dannyissocool/game-of-life'
            pagesLink='https://dannyissocool.github.io/game-of-life/'
            imgSrc={gameOfLife}
          />
          
        
        </ItemGroup>
      </Container>
    </section>
  );
};

export default Projects;
