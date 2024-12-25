// src/pages/HomePage.tsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUser, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

const HomePage: React.FC = () => {
  return (
    <Container className="mt-4">
      <Card className="text-center mb-5">
        <Card.Body>
          <Card.Title as="h1">Welcome to BCard</Card.Title>
          <Card.Text className="lead">
            Your one-stop solution for managing and sharing your business cards seamlessly.
          </Card.Text>
          <Button variant="primary" href="/register">Get Started</Button>
        </Card.Body>
      </Card>
      
      <Row className="mt-5">
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body className="text-center">
              <FaUser size={32} className="mb-3" />
              <Card.Title>Easy to Use</Card.Title>
              <Card.Text>
                Our platform is designed with simplicity and ease of use in mind.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body className="text-center">
              <FaShieldAlt size={32} className="mb-3" />
              <Card.Title>Secure</Card.Title>
              <Card.Text>
                We prioritize your security and ensure your data is safe with us.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body className="text-center">
              <FaLightbulb size={32} className="mb-3" />
              <Card.Title>Innovative Features</Card.Title>
              <Card.Text>
                Experience cutting-edge features that make managing business cards a breeze.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5 text-center">
        <Col>
          <h2>Why Choose BCard?</h2>
          <p className="lead">
            Learn about the unique benefits and features that make BCard stand out.
          </p>
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>Networking Simplified</Card.Title>
              <Card.Text>
                Connect with professionals effortlessly and expand your network.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>Professional Design</Card.Title>
              <Card.Text>
                Present yourself with beautifully designed business cards.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5 text-center">
        <Col>
          <h2>What Our Users Say</h2>
          <p className="lead">
            Hear from our satisfied users who have experienced the BCard advantage.
          </p>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center">
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>User 1</Card.Title>
              <Card.Text>
                "BCard has revolutionized the way I manage my business contacts. It's a game-changer!"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>User 2</Card.Title>
              <Card.Text>
                "The security and features provided by BCard are unmatched. Highly recommend it!"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>User 3</Card.Title>
              <Card.Text>
                "BCard is the perfect tool for any professional looking to streamline their networking."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;


