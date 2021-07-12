import React, { useState, useContext, useEffect } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavBarContext } from '../../context/NavBarContext';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  const [active, setActive] = useState({ activeItem: 'aboutMe' });
  const [navbar, setNavbar] = useState(false);

  const { open, setOpen } = useContext(NavBarContext);

  const { activeItem } = active;

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  useEffect(() => {
    let url = window.location.href.split('/');
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <Menu inverted id='navbar'>
      <Container>
        <Menu.Item
          as={Link}
          to='/'
          className='logo'
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
          header
        >
          Meuse
        </Menu.Item>
        <div className='spacer' style={{ flex: 1 }} />
        <div
          onClick={() => setOpen(!open)}
          className={`hamburger ${open ? 'active' : null}`}
        >
          <div className='bar ' />
          <div className='bar ' />
          <div className='bar ' />
        </div>
        <div className='nav-items active'>
          <Menu.Item
            as={Link}
            to='/about'
            name='aboutMe'
            active={activeItem === 'aboutMe'}
            onClick={(e, { name }) => {
              setActive({ activeItem: name });
              let about = document.getElementById('about');
              about &&
                about.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          />
          <Menu.Item
            as={Link}
            to='/portfolio'
            name='Portfolio'
            active={activeItem === 'Portfolio'}
            onClick={(e, { name }) => {
              setActive({ activeItem: name });
              let portfolio = document.getElementById('portfolio');
              portfolio &&
                portfolio.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
            }}
          />
          <Menu.Item
            as={Link}
            to='/contact'
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={(e, { name }) => {
              setActive({ activeItem: name });
              let contact = document.getElementById('contact');
              contact &&
                contact.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
            }}
          />
        </div>
      </Container>
    </Menu>
  );
};

export default NavBar;
