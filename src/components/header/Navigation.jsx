import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/css/Main.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'

export default function Navigation() {
    return (
        <div>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand><Link to='/'>
                        <img src={Logo} alt="logo" />
                    </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to={'/'}
                                className='mainmenu'>Home</Link> </Nav.Link>
                            <Nav.Link><Link to={'/menu'} className='mainmenu'>Menu</Link> </Nav.Link>
                            <Nav.Link><Link to={'/about'} className='mainmenu'>About</Link> </Nav.Link>
                            <Nav.Link><Link to={'/contact'} className='mainmenu'>Contact</Link> </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
