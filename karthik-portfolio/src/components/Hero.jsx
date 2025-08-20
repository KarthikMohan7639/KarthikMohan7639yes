import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';
import { motion } from 'framer-motion';
import resumeData from '../data/resumeData';

const Hero = () => {
    return (
        <Container fluid className="hero-section py-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={5} className="text-center mb-4 mb-md-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={profileImage}
                                alt="Karthik Mohan"
                                className="profile-image rounded-circle img-fluid shadow"
                                style={{ maxWidth: '300px' }}
                            />
                        </motion.div>
                    </Col>
                    <Col md={7}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h1 className="display-4 fw-bold text-primary">Karthik Mohan</h1>
                            <h2 className="h3 mb-3 text-secondary">Software & Cloud Engineer</h2>
                            <p className="lead mb-4">{resumeData.summary}</p>

                            <div className="social-links mb-4">
                                <a href={resumeData.linkedIn} target="_blank" rel="noreferrer" className="social-icon me-3">
                                    <FaLinkedinIn size={24} />
                                </a>
                                <a href={resumeData.github} target="_blank" rel="noreferrer" className="social-icon me-3">
                                    <FaGithub size={24} />
                                </a>
                                <a href={`mailto:${resumeData.email}`} className="social-icon me-3">
                                    <FaEnvelope size={24} />
                                </a>
                            </div>

                            <div className="d-flex flex-wrap gap-2">
                                <Link to="/projects">
                                    <Button variant="primary" size="lg" className="me-2">View Projects</Button>
                                </Link>
                                <Link to="/contact">
                                    <Button variant="outline-primary" size="lg">Contact Me</Button>
                                </Link>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Hero;
