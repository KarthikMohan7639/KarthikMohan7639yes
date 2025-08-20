import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const NavbarHeader = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar-custom">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
                    <img
                        src={profileImg}
                        alt="Profile"
                        style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', marginRight: 10 }}
                    />
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Karthik Mohan
                    </motion.span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link as={Link} to="/projects" className="nav-link-custom">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/experience" className="nav-link-custom">Experience</Nav.Link>
                        <Nav.Link as={Link} to="/skills" className="nav-link-custom">Skills</Nav.Link>
                        <Nav.Link as={Link} to="/publications" className="nav-link-custom">Publications</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
                        <Nav.Link href="/Karthik_Mohan_Resume.pdf" target="_blank" className="nav-link-custom resume-link">
                            <FaFileAlt className="me-1" /> Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarHeader;