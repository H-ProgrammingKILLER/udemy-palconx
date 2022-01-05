import React from 'react';
import logo from '../../img/logo1.png'
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Headers.css';


const Headers = () => {
    return (
        <div className='header-area'>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img className="logo" src={logo} alt="logo" /></Navbar.Brand>
                    <Nav className="nav-item-area">
                        <Nav.Link href="/course">Course</Nav.Link>
                        <Nav.Link href="/your-course">Your Course</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;