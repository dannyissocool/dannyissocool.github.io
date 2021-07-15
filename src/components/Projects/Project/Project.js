import React from 'react';
import './Project.css';
import { Item, Image } from 'semantic-ui-react';

const Project = ({
  header = 'Placeholder',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum in obcaecati quam numquam natus, debitis ab est consectetur, officiis',
  imgSrc = 'https://react.semantic-ui.com/images/wireframe/image.png',
  repoLink = 'https://github.com/dannyissocool',
  pagesLink = 'https://github.com/dannyissocool',
}) => {
  return (
    <Item className='project'>
      <Item.Image id='img' size='tiny' src={imgSrc} />

      <Item.Content>
        <Item.Header id='header' as='a'>
          {header}
        </Item.Header>

        <Item.Description>
          <p id='desc'>{desc}</p>
        </Item.Description>
        <div className='links'>
          <Item.Extra id='link' as='a' href={repoLink}>
            Github Repo
          </Item.Extra>
          <Item.Extra id='link' as='a' href={pagesLink}>
            Live on Github Pages
          </Item.Extra>
        </div>
      </Item.Content>
    </Item>
  );
};

export default Project;
