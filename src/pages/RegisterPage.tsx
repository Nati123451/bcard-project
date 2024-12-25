import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaHome, FaGlobe, FaCity, FaBuilding, FaCamera } from 'react-icons/fa';

const RegisterPage: React.FC = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    zip: '',
    postalCode: '',
    imageUrl: '',
    imageAlt: '',
    state: '',
    city: '',
    country: '',
    houseNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration');
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center">Register</h1>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formFirstName" className="mb-3">
                  <Form.Label><FaUser /> First Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="firstName" 
                    value={userDetails.firstName} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formLastName" className="mb-3">
                  <Form.Label><FaUser /> Last Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="lastName" 
                    value={userDetails.lastName} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Label><FaUser /> Username</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="username" 
                    value={userDetails.username} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label><FaEnvelope /> Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    value={userDetails.email} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label><FaLock /> Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    name="password" 
                    value={userDetails.password} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formConfirmPassword" className="mb-3">
                  <Form.Label><FaLock /> Confirm Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    name="confirmPassword" 
                    value={userDetails.confirmPassword} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formImageUrl" className="mb-3">
                  <Form.Label><FaCamera /> Image URL</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="imageUrl" 
                    value={userDetails.imageUrl} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formImageAlt" className="mb-3">
                  <Form.Label><FaCamera /> Image Alt</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="imageAlt" 
                    value={userDetails.imageAlt} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formState" className="mb-3">
                  <Form.Label><FaBuilding /> State</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="state" 
                    value={userDetails.state} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formCity" className="mb-3">
                  <Form.Label><FaCity /> City</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="city" 
                    value={userDetails.city} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formCountry" className="mb-3">
                  <Form.Label><FaGlobe /> Country</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="country" 
                    value={userDetails.country} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formHouseNumber" className="mb-3">
                  <Form.Label><FaHome /> House Number</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="houseNumber" 
                    value={userDetails.houseNumber} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formZip" className="mb-3">
                  <Form.Label><FaHome /> Zip</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="zip" 
                    value={userDetails.zip} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPostalCode" className="mb-3">
                  <Form.Label><FaHome /> Postal Code</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="postalCode" 
                    value={userDetails.postalCode} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;




