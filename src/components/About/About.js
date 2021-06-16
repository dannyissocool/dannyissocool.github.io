import React from 'react';
import { Header, Icon, Image, Container, List } from 'semantic-ui-react';
import './About.css';
import Img from './danpug.jpg';

const About = () => {
  return (
    <div className='about' id='about'>
      <h1 className='header'>About Me</h1>

      <section className='biography'>
        <img src={Img} className='image' />
        <p>
          Thank you for visiting my website! My name is Danny Meuse and I am a
          Junior Web Developer. I am looking forward to expanding my skills in
          this growing industry and learning from on-the-job experience.
        </p>
      </section>
      <Container>
        <section className='icon-cards'>
          <div className='icon-card'>
            <Icon name='code' className='icon' size='big' circular />
            <h2 className='card-header'>Web Development</h2>
            {/* <p>
              I am currently proficient in HTML, CSS (including Flex, Grid,
              SCSS, Semantic-UI, and Tailwind-CSS), vanilla Javascript, and
              React. I am focusing on front end-development but am working
              towards becoming a full-stack developer.
            </p> */}
            <List as='ul' style={{ textAlign: 'left' }}>
              <List.Item as='li'>HTML</List.Item>
              <List.Item as='li'>
                CSS, SCSS, Semantic-UI, Tailwind-CSS
              </List.Item>
              <List.Item as='li'>Javascript, React</List.Item>
            </List>
          </div>
          <div className='icon-card'>
            <Icon name='paint brush' className='icon' size='big' circular />
            <h2 className='card-header'>Web Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              architecto placeat ea veritatis ex? Dolores nemo non architecto
              eum nobis. Repellendus tempora cupiditate ex consequatur debitis
            </p>
          </div>
          <div className='icon-card'>
            <Icon name='youtube play' className='icon' size='big' circular />
            <h2 className='card-header'>Photo/Video Editing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              architecto placeat ea veritatis ex? Dolores nemo non architecto
              eum nobis. Repellendus tempora cupiditate ex consequatur debitis
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default About;
