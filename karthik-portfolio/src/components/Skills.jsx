import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import resumeData from '../data/resumeData';

const Skills = () => {
    const categories = {
        languages: "Programming Languages",
        frameworks: "Frameworks & Libraries",
        cloud: "Cloud & DevOps",
        tools: "Tools & Technologies"
    };

    return (
        <Container className="py-5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-center mb-5">Skills & Technologies</h2>

                {Object.keys(categories).map((category, catIndex) => (
                    <div key={category} className="mb-5">
                        <h3 className="mb-4">{categories[category]}</h3>
                        <Row xs={1} md={2} className="g-4">
                            {resumeData.skills[category].map((skill, index) => (
                                <Col key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: (catIndex * 0.1) + (index * 0.05) }}
                                    >
                                        <Card className="shadow-sm skill-card h-100">
                                            <Card.Body>
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <Card.Title className="m-0">{skill.name}</Card.Title>
                                                    <span className="text-primary">{skill.level}%</span>
                                                </div>
                                                <ProgressBar
                                                    now={skill.level}
                                                    variant={
                                                        skill.level >= 80 ? "success" :
                                                            skill.level >= 60 ? "info" :
                                                                skill.level >= 40 ? "primary" : "secondary"
                                                    }
                                                    className="mb-3"
                                                />
                                                {skill.description && (
                                                    <Card.Text className="text-muted small">
                                                        {skill.description}
                                                    </Card.Text>
                                                )}
                                            </Card.Body>
                                        </Card>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
            </motion.div>
        </Container>
    );
};

export default Skills;