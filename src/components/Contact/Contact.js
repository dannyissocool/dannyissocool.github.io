import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-section' id='contact'>
      <h1 className='contact-header'>Contact</h1>
      <ul className='contact-links'>
        <li>
          <a href='mailto:danny.meuse@gmail.com' target='_blank'>
            <Icon name='mail' />
            Gmail
          </a>
        </li>
        <li>
          <a href='https://www.github.com/dannyissocool' target='_blank'>
            <Icon name='github' />
            Github
          </a>
        </li>
        <li>
          <a href='https://twitter.com/DannyMeuse' target='_blank'>
            <Icon name='twitter' />
            Twitter
          </a>
        </li>
        <li>
          <a href='https://instagram.com/dmeuse/' target='_blank'>
            <Icon name='instagram' />
            Instagram
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/daniel-meuse-a28079a6/'
            target='_blank'
          >
            <Icon name='linkedin' />
            LinkedIn
          </a>
        </li>
      </ul>

      {/* <iframe
        className='map'
        width='600'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_PORTFOLIO_GOOGLE_MAP_TOKEN}&zoom=11
            &q=Portland+OR`}
      ></iframe> */}

      <h3>I live in Portland.</h3>
    </div>
  );
};

export default Contact;
