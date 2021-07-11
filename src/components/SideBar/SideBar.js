import React, { useContext, useRef } from 'react';
import { NavBarContext } from '../../context/NavBarContext';
import { Link } from 'react-router-dom';
import { Header, Menu, Grid } from 'semantic-ui-react';
import './SideBar.css';

const SideBar = () => {
  const { open, setOpen } = useContext(NavBarContext);

  const handleClick = (e) => {
    if (
      e.currentTarget.classList.contains(
        'side-bar' || 'side-bar-links' || 'side-bar-link'
      )
    ) {
      return;
    } else {
      console.log('gotem');
      setOpen(!open);
    }
  };

  return (
    <Grid className='grid-base-level' columns={1}>
      <Grid.Column>
        <Menu
          onClick={handleClick}
          inverted
          pointing
          className={`side-bar ${open ? 'active' : null}`}
        >
          <div className='side-bar-links'>
            <Menu.Item
              name='About Me'
              as={Link}
              to='/about'
              onClick={() => {
                let about = document.getElementById('about');
                about &&
                  about.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setOpen(!open);
              }}
              className='side-bar-link'
            >
              About Me
            </Menu.Item>
            <Menu.Item
              name='Portfolio'
              as={Link}
              to='/portfolio'
              onClick={() => {
                let portfolio = document.getElementById('portfolio');
                portfolio &&
                  portfolio.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                setOpen(!open);
              }}
              className='side-bar-link'
            />
            <Menu.Item
              name='Contact'
              as={Link}
              to='/contact'
              onClick={() => {
                let contact = document.getElementById('contact');
                contact &&
                  contact.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                setOpen(!open);
              }}
              className='side-bar-link'
            />
          </div>
        </Menu>
      </Grid.Column>
    </Grid>
  );
};

export default SideBar;
