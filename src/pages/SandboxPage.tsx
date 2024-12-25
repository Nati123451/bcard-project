// src/pages/SandboxPage.tsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import BusinessCard from '../components/BusinessCard';
import Notification from '../components/Notification';
import { FaFileAlt, FaPhone, FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa';

const SandboxPage: React.FC = () => {
  const [cards, setCards] = useState<{ description: string; phone: string; address: string; cardNumber: number }[]>([]);
  const [newCard, setNewCard] = useState({ description: '', phone: '', address: '', cardNumber: 0 });
  const [notification, setNotification] = useState({ message: '', variant: 'info' as 'info' | 'success' | 'danger' | 'warning', show: false });

  const addCard = () => {
    setCards([...cards, newCard]);
    setNotification({ message: 'Card added successfully!', variant: 'success', show: true });
    setNewCard({ description: '', phone: '', address: '', cardNumber: 0 });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCard({ ...newCard, [e.target.name]: e.target.value });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, show: false });
  };

  return (
    <Container className="mt-4">
      <h1>Sandbox</h1>
      <p>Here you can play around with creating new business cards and testing new features.</p>
      <Notification 
        message={notification.message}
        variant={notification.variant}
        show={notification.show}
        onClose={handleCloseNotification}
      />
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text><FaFileAlt /></InputGroup.Text>
              <Form.Control 
                name="description" 
                placeholder="Description" 
                value={newCard.description} 
                onChange={handleChange} 
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text><FaPhone /></InputGroup.Text>
              <Form.Control 
                name="phone" 
                placeholder="Phone" 
                value={newCard.phone} 
                onChange={handleChange} 
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text><FaMapMarkerAlt /></InputGroup.Text>
              <Form.Control 
                name="address" 
                placeholder="Address" 
                value={newCard.address} 
                onChange={handleChange} 
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup>
              <InputGroup.Text><FaCreditCard /></InputGroup.Text>
              <Form.Control 
                name="cardNumber" 
                placeholder="Card Number" 
                type="number" 
                value={newCard.cardNumber} 
                onChange={handleChange} 
              />
            </InputGroup>
          </Col>
        </Row>
        <Button className="w-100" onClick={addCard}>Add Card</Button>
      </Form>
      <Row className="mt-4">
        {cards.map((card, index) => (
          <Col key={index} sm={6} md={4} className="mb-4">
            <BusinessCard {...card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SandboxPage;



