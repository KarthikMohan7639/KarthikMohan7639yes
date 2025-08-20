import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import resumeData from '../data/resumeData';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formElements = e.target.elements;
        const name = formElements.name.value;
        const email = formElements.email.value;
        const message = formElements.message.value;

        // Create mailto link with pre-filled information
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:${resumeData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open email client
        window.location.href = mailtoLink;
    };

    return (
        <Container className="py-5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-center mb-5">Get In Touch</h2>

                <Row>
                    <Col md={5} className="mb-4 mb-md-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card className="contact-info-card shadow h-100">
                                <Card.Body>
                                    <Card.Title className="mb-4">Contact Information</Card.Title>

                                    <div className="contact-item mb-4">
                                        <FaEnvelope className="contact-icon me-3 text-primary" />
                                        <div>
                                            <h5 className="mb-0">Email</h5>
                                            <a href={`mailto:${resumeData.email}`} className="text-decoration-none">
                                                {resumeData.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="contact-item mb-4">
                                        <FaLinkedin className="contact-icon me-3 text-primary" />
                                        <div>
                                            <h5 className="mb-0">LinkedIn</h5>
                                            <a href={resumeData.linkedIn} target="_blank" rel="noreferrer" className="text-decoration-none">
                                                LinkedIn Profile
                                            </a>
                                        </div>
                                    </div>

                                    <div className="contact-item mb-4">
                                        <FaGithub className="contact-icon me-3 text-primary" />
                                        <div>
                                            <h5 className="mb-0">GitHub</h5>
                                            <a href={resumeData.github} target="_blank" rel="noreferrer" className="text-decoration-none">
                                                GitHub Profile
                                            </a>
                                        </div>
                                    </div>

                                    <div className="contact-item">
                                        <FaMapMarkerAlt className="contact-icon me-3 text-primary" />
                                        <div>
                                            <h5 className="mb-0">Location</h5>
                                            <p className="mb-0">{resumeData.location}</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>

                    <Col md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card className="shadow">
                                <Card.Body>
                                    <Card.Title className="mb-4">Send Me a Message</Card.Title>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Your name"
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Your email address"
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                name="message"
                                                rows={5}
                                                placeholder="Your message"
                                                required
                                            />
                                        </Form.Group>

                                        <div className="d-grid">
                                            <Button variant="primary" type="submit" size="lg">
                                                Send Message
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </motion.div>
        </Container>
    );
};

export default Contact;