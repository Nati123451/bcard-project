// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center">Contact Me</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label><FaUser /> Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={contactDetails.name} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label><FaEnvelope /> Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={contactDetails.email} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label><FaPhone /> Phone</Form.Label>
              <Form.Control 
                type="tel" 
                name="phone" 
                value={contactDetails.phone} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label><FaBuilding /> Subject</Form.Label>
              <Form.Control 
                type="text" 
                name="subject" 
                value={contactDetails.subject} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                name="message" 
                value={contactDetails.message} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const LoginPage: React.FC = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: שליחת פרטי ההתחברות לשרת
    // fetch('/api/login', { method: 'POST', body: JSON.stringify(loginDetails), headers: { 'Content-Type': 'application/json' } });
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center">Login</h1>
          <Form onSubmit={handleSubmit} className="p-4 shadow rounded">
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={loginDetails.email} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password *</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                value={loginDetails.password} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary" type="submit">Login</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};


export default ContactPage;

