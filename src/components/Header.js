import React from 'react'
import {Navbar, Nav,Container} from 'react-bootstrap'

const Header = () => {
  return (
   <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">ProShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>    
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  )
}

export default Header