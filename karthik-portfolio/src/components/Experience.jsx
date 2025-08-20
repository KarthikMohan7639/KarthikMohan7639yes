import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import resumeData from '../data/resumeData';

const Experience = () => {
    return (
        <Container className="py-5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-center mb-5">Experience & Education</h2>

                <h3 className="mb-4">Professional Experience</h3>
                <div className="timeline">
                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="mb-4 shadow-sm">
                                <Card.Body>
                                    <Row>
                                        <Col md={3} className="mb-3 mb-md-0">
                                            <div className="text-muted">{exp.period}</div>
                                        </Col>
                                        <Col md={9}>
                                            <h4 className="card-title">{exp.title}</h4>
                                            <h5 className="card-subtitle mb-2 text-primary">{exp.company}</h5>
                                            <p>{exp.description}</p>
                                            <ul>
                                                {exp.responsibilities.map((resp, i) => (
                                                    <li key={i}>{resp}</li>
                                                ))}
                                            </ul>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <h3 className="mb-4 mt-5">Education</h3>
                <div className="timeline">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="mb-4 shadow-sm">
                                <Card.Body>
                                    <Row>
                                        <Col md={3} className="mb-3 mb-md-0">
                                            <div className="text-muted">{edu.period}</div>
                                        </Col>
                                        <Col md={9}>
                                            <h4 className="card-title">{edu.degree}</h4>
                                            <h5 className="card-subtitle mb-2 text-primary">{edu.institution}</h5>
                                            <p><strong>CGPA:</strong> {edu.grade}</p>
                                            {edu.details && (
                                                <p>{edu.details}</p>
                                            )}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Container>
    );
};

export default Experience;