import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import resumeData from '../data/resumeData';

const Publications = () => {
    return (
        <Container className="py-5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-center mb-5">Publications & Papers</h2>

                <div className="publications-list">
                    {resumeData.publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="mb-4 shadow-sm publication-card">
                                <Card.Body>
                                    <Card.Title>{pub.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-primary">{pub.journal}, {pub.year}</Card.Subtitle>
                                    <Card.Text className="text-muted">
                                        Authors: {pub.authors}
                                    </Card.Text>
                                    <Card.Text>{pub.abstract}</Card.Text>
                                    {pub.link && (
                                        <Card.Link href={pub.link} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
                                            <FaExternalLinkAlt className="me-1" /> View Publication
                                        </Card.Link>
                                    )}
                                </Card.Body>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Container>
    );
};

export default Publications;