// src/pages/RegistrationPage.tsx
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    imageUrl: '',
    imageAlt: '',
    state: '',
    country: '',
    city: '',
    street: '',
    houseNumber: '',
    zip: '',
    isBusiness: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Registration successful!');
  };

  return (
    <Container className="mt-4">
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName" className="mt-3">
          <Form.Label>First Name *</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            minLength={2}
          />
        </Form.Group>
        <Form.Group controlId="formMiddleName" className="mt-3">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formLastName" className="mt-3">
          <Form.Label>Last Name *</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPhone" className="mt-3">
          <Form.Label>Phone *</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="\d{10}"
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password *</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={9}
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-]).{9,}"
          />
        </Form.Group>
        <Form.Group controlId="formImageUrl" className="mt-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formImageAlt" className="mt-3">
          <Form.Label>Image Alt</Form.Label>
          <Form.Control
            type="text"
            name="imageAlt"
            value={formData.imageAlt}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formState" className="mt-3">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formCountry" className="mt-3">
          <Form.Label>Country *</Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCity" className="mt-3">
          <Form.Label>City *</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formStreet" className="mt-3">
          <Form.Label>Street *</Form.Label>
          <Form.Control
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formHouseNumber" className="mt-3">
          <Form.Label>House Number *</Form.Label>
          <Form.Control
            type="text"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formZip" className="mt-3">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formIsBusiness" className="mt-3">
          <Form.Check
            type="checkbox"
            name="isBusiness"
            label="Signup as business"
            checked={formData.isBusiness}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="secondary" className="mt-3" type="reset">
          Cancel
        </Button>
        <Button variant="primary" className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default RegistrationPage;
