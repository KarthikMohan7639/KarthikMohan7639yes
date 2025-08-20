import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import resumeData from '../data/resumeData';

const Projects = () => {
    return (
        <Container className="py-5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-center mb-5">Projects</h2>
                <Row xs={1} md={2} className="g-4">
                    {resumeData.projects.map((project, index) => (
                        <Col key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className="h-100 shadow project-card">
                                    {project.image && (
                                        <Card.Img variant="top" src={project.image} alt={project.title} />
                                    )}
                                    <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
                                        <div className="mb-2">
                                            {project.technologies.map((tech, i) => (
                                                <Badge bg="primary" className="me-1 mb-1" key={i}>{tech}</Badge>
                                            ))}
                                        </div>
                                        <Card.Text>{project.description}</Card.Text>
                                        <ul className="project-achievements">
                                            {project.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </Card.Body>
                                    <Card.Footer className="bg-transparent border-0">
                                        {project.github && (
                                            <Card.Link href={project.github} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary me-2">
                                                GitHub
                                            </Card.Link>
                                        )}
                                        {project.demo && (
                                            <Card.Link href={project.demo} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-secondary">
                                                Demo
                                            </Card.Link>
                                        )}
                                    </Card.Footer>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </motion.div>
        </Container>
    );
};

export default Projects;