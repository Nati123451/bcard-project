// src/pages/EditCardPage.tsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EditCardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [cardDetails, setCardDetails] = useState({
    title: '',
    description: '',
    image: ''
  });

  // Placeholder: בקשה לשרת להחזרת פרטי הכרטיס לפי מזהה
  // נשתמש במזהה כדי לשלוף את פרטי הכרטיס ולמלא את השדות
  // fetch(`/api/cards/${id}`).then(response => response.json()).then(data => setCardDetails(data));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: שליחת נתוני הכרטיס לעריכה לשרת
    // fetch(`/api/cards/${id}`, { method: 'PUT', body: JSON.stringify(cardDetails), headers: { 'Content-Type': 'application/json' } });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center">Edit Card</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                name="title" 
                value={cardDetails.title} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                name="description" 
                value={cardDetails.description} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formImage" className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control 
                type="text" 
                name="image" 
                value={cardDetails.image} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditCardPage;
