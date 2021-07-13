import React, { useEffect, useState } from 'react';
import { Image, Container, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Hero.css';
import Selfie from './selfie1.jpg';

const Hero = () => {
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    setAppear(true);
  }, []);

  return (
    <div className='background'>
      <div className='container'>
        <Container id='hero-elements'>
          <section className={`hero  ${appear ? 'active' : ''}`}>
            <div className={`text-and-button`}>
              <Header as='h1'>Hello there...</Header>
              <Header as='h2'>
                I'm Danny. <br />
                I'm a Frontend Developer. <br />
              </Header>

              <Button
                as={Link}
                to='/about'
                onClick={() => {
                  let about = document.getElementById('about');
                  about &&
                    about.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                }}
                className='btn'
                primary
              >
                About Me
              </Button>
            </div>
            <Image src={Selfie} className={`hero-image`} />
          </section>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
