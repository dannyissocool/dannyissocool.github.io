import React, { useEffect, useState } from 'react';
import { Image, Container, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Hero.css';
import Img from './selfie1.jpg';

const Hero = () => {
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    setAppear(true);
  }, []);

  return (
    <Container id='hero'>
      <section className={`hero  ${appear ? 'active' : ''}`}>
        <div className={`hero-title hero-item`}>
          <Header as='h1'>Hello there...</Header>
          <Header as='h2'>I'm Danny.</Header>
          <Header as='h2'>Welcome to my website</Header>
          <Button
            as={Link}
            to='/about'
            onClick={() => {
              let about = document.getElementById('about');
              about &&
                about.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className='btn'
            secondary
          >
            About Me
          </Button>
        </div>
        <Image src={Img} className={`hero-item`} />
      </section>
    </Container>
  );
};

export default Hero;
