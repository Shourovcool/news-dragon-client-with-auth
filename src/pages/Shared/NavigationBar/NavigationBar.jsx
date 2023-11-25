import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <Container>
            <Navbar expand="lg" bg='light' variant='light'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='me-2' style={{ textDecoration: 'none', color: 'black' }} to='/'>Home</Link>
                            <Link className='me-2' style={{ textDecoration: 'none', color: 'black' }} to='/'>About</Link>
                            <Link className='me-2' style={{ textDecoration: 'none', color: 'black' }} to='/'>Career</Link>

                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }

                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                                :
                                <Link to='/login'>
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;