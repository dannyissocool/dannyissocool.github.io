import React from 'react';
import './Project.css';
import { Item, Image } from 'semantic-ui-react';

const Project = () => {
  return (
    <Item className='project'>
      <Item.Image
        id='img'
        size='tiny'
        src='https://react.semantic-ui.com/images/wireframe/image.png'
      />

      <Item.Content>
        <Item.Header id='header' as='a'>
          Header
        </Item.Header>

        <Item.Description>
          <p id='desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum in
            obcaecati quam numquam natus, debitis ab est consectetur, officiis
          </p>
        </Item.Description>
        <Item.Extra id='link' as='a' href='https://github.com/dannyissocool'>
          Additional Details
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default Project;
