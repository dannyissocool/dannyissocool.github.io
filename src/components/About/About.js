import React, { useEffect, useContext } from 'react';
import { Header, Icon, Image, Container, List } from 'semantic-ui-react';
import { ScrollAnimationContext } from '../../context/ScrollAnimationContext';
import './About.css';
import Img from './danpug.jpg';

const About = () => {
  const { onScreen, setOnScreen } = useContext(ScrollAnimationContext);

  useEffect(() => {
    const options = {
      threshold: 0.7,
    };

    function showElem(entryArray) {
      let element = document.querySelector('#bio-contents');
      entryArray[0].isIntersecting
        ? (element.className = 'bio-contents active')
        : (element.className = 'bio-contents');
    }

    const observer = new IntersectionObserver(showElem, options);

    observer.observe(document.querySelector('#bio'));
  });

  return (
    <div className='about' id='about'>
      <h1 className='header'>About Me</h1>

      <section className='biography' id='bio'>
        <div className={`bio-contents`} id='bio-contents'>
          <img src={Img} className='image' />

          <p>
            My name is Danny Meuse. I am a Junior Frontend Web Developer
            focusing on React and Vanilla Javascript. I am working towards
            eventually becoming a fullstack developer. I look forward to using
            my style and skills to help clients build modern interactive and
            responsive websites.
          </p>
        </div>
      </section>
      <Container>
        <section className='icon-cards'>
          <div className='icon-card'>
            <Icon name='code' className='icon' size='big' circular />
            <h2 className='card-header'>Web Development</h2>

            <List className='list'>
              <List.Item>HTML, CSS, Javascript, React</List.Item>
              <List.Item>SCSS, Semantic-UI, Tailwind, Material-UI</List.Item>
            </List>
          </div>
          <div className='icon-card'>
            <Icon name='paint brush' className='icon' size='big' circular />
            <h2 className='card-header'>Web Design</h2>
            <List className='list'>
              <List.Item>Photoshop</List.Item>
              <List.Item>Illustrator</List.Item>
              <List.Item>GIMP</List.Item>
              <List.Item>Figma</List.Item>
            </List>
          </div>
          <div className='icon-card'>
            <Icon name='youtube play' className='icon' size='big' circular />
            <h2 className='card-header'>Photo/Video Editing</h2>
            <List>
              <List.Item>Adobe Premier, Final Cut Pro</List.Item>
            </List>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default About;
