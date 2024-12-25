// src/pages/AboutPage.tsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaInfoCircle, FaUserTie, FaChartLine, FaBullseye, FaMedal, FaTools, FaHandshake, FaUserAlt, FaUserFriends, FaUserGraduate, FaUser, FaUserNurse } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', icon: <FaUserTie size={32} className="mb-3" /> },
  { name: 'Jane Smith', role: 'Chief Technology Officer', icon: <FaUser size={32} className="mb-3" /> },
  { name: 'Emily Johnson', role: 'Head of Marketing', icon: <FaUserNurse size={32} className="mb-3" /> }
];

const AboutPage: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div id="about-page" className={`container-full ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <main className="py-4">
        <Container className="mt-4">
          <Row>
            <Col className="text-center animate__animated animate__fadeIn">
              <FaInfoCircle size={64} className="mb-3" />
              <h1 className={darkMode ? 'text-light' : 'text-dark'}>About Project</h1>
              <p className={`lead ${darkMode ? 'text-light' : 'text-dark'}`}>
                Welcome to BCard! We are passionate about providing the best services for managing and sharing your business cards.
                Our mission is to simplify and enhance the way you connect with others.
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={4}>
              <Card className={`mb-4 shadow-sm animate__animated animate__slideInLeft ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                <Card.Body>
                  <FaUserTie size={32} className="mb-3" />
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    To innovate and create the best tools for professional networking and business interactions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={`mb-4 shadow-sm animate__animated animate__slideInUp ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                <Card.Body>
                  <FaChartLine size={32} className="mb-3" />
                  <Card.Title>Our Vision</Card.Title>
                  <Card.Text>
                    Connecting professionals globally with seamless and effective solutions for managing business cards.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={`mb-4 shadow-sm animate__animated animate__slideInRight ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                <Card.Body>
                  <FaBullseye size={32} className="mb-3" />
                  <Card.Title>Our Values</Card.Title>
                  <Card.Text>
                    Integrity, innovation, and excellence are at the core of everything we do.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={4}>
              <Card className={`mb-4 shadow-sm animate__animated animate__fadeInLeft ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                <Card.Body>
                  <FaMedal size={32} className="mb-3" />
                  <Card.Title>Achievements</Card.Title>
                  <Card.Text>
                    We have been awarded numerous times for our innovation and excellence in providing networking solutions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={`mb-4 shadow-sm animate__animated animate__fadeInUp ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                <Card.Body>
                  <FaTools size={32} className="mb-3" />
                  <Card.Title>Services</Card.Title>
                  <Card.Text>
                    In addition to business card management, we offer a suite of tools designed to help you grow your professional network.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className={`mb-4 shadow-sm animate__animated animate__fadeInRight ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                <Card.Body>
                  <FaHandshake size={32} className="mb-3" />
                  <Card.Title>Partnerships</Card.Title>
                  <Card.Text>
                    We have partnered with industry leaders to provide you with the best networking experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <h2 className={darkMode ? 'text-light' : 'text-dark'}>Meet Our Team</h2>
              <p className={darkMode ? 'text-light' : 'text-dark'}>
                Our team is composed of dedicated professionals with diverse skills and backgrounds,
                all working together to deliver exceptional products and services.
              </p>
              <Row className="justify-content-center">
                {teamMembers.map((member, index) => (
                  <Col md={4} className="mb-4" key={index}>
                    <Card className={`shadow-sm animate__animated animate__zoomIn ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                      <Card.Body>
                        {member.icon}
                        <Card.Title>{member.name}</Card.Title>
                        <Card.Text>{member.role}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className={`text-center mt-4 py-3 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <Container>
          <Row>
            <Col>
              <p>© 2024 BCard. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default AboutPage;


