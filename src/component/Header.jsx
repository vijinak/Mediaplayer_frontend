import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="bg-transparent border border-secondary">
        <Container>
          <Navbar.Brand href="#home">
          <FontAwesomeIcon className='text-warning' icon={faVideo} beat size='2xl'/>
            <span className='ms-3 fs-5' style={{color:'white'}}>Media Player</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header