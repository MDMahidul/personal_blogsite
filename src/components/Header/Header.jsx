import React, { useState } from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes,faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare,faLinkedin,faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './Header.css'; 
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Navbar className='navbar-bg' expand="lg">
        <Container className='py-1'>
          <Navbar.Brand href="/"><FontAwesomeIcon className='social-icon' size='lg' icon={faHome}></FontAwesomeIcon></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={handleToggle}
            className={expanded ? 'expanded' : ''} // Add the 'expanded' class when the Navbar is expanded
          >
            <FontAwesomeIcon className='social-icon' size='lg' icon={expanded ? faTimes : faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll" className={expanded ? 'show' : ''}>
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className='nav-item'><ActiveLink  to="/">Home</ActiveLink></Nav.Link>
              <Nav.Link className='nav-item'><ActiveLink  to="/about">About</ActiveLink></Nav.Link>
              <Nav.Link className='nav-item'><ActiveLink  to="/blogs">Blogs</ActiveLink></Nav.Link>
              <Nav.Link className='nav-item'><ActiveLink  to="/publication">Publications</ActiveLink></Nav.Link>
              <Nav.Link className='nav-item'><ActiveLink  to="/media">Media</ActiveLink></Nav.Link>
              <Nav.Link className='nav-item'><ActiveLink  to="/contact">Contact</ActiveLink></Nav.Link>
            {/*   <Nav.Link href="https://www.facebook.com/mohan91165" target="_blank"><FontAwesomeIcon className='social-icon' size='lg' icon={faFacebookSquare}></FontAwesomeIcon></Nav.Link>
              <Nav.Link href="https://twitter.com/rmushfiqur" target="_blank"><FontAwesomeIcon className='social-icon' size='lg' icon={faTwitterSquare}></FontAwesomeIcon></Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/mushfiqur-rahman-mohan-196440112/" target="_blank"><FontAwesomeIcon className='social-icon' size='lg' icon={faLinkedin}></FontAwesomeIcon></Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
