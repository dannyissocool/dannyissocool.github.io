import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { NavBarProvider } from './context/NavBarContext';
import { ScrollAnimationProvider } from './context/ScrollAnimationContext';
import { Divider } from 'semantic-ui-react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Router>
      <NavBarProvider>
        <NavBar />
        <SideBar />
      </NavBarProvider>
      <ScrollAnimationProvider>
        <Hero />

        <About />

        <Projects />
        <Contact />
        <Divider />
      </ScrollAnimationProvider>

      <Footer />
    </Router>
  );
}

export default App;
