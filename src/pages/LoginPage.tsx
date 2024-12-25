// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import 'animate.css';

const LoginPage: React.FC = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    const user = users.find((u: any) => u.login.username === credentials.username && u.password === credentials.password);
    
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert('Login successful!');
    } else {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Container className="container-full login-page">
      <Row>
        <Col className="text-center">
          <h1 className="animate__animated animate__fadeIn">Login</h1>
          <p className="lead">Welcome back! Please login to your account.</p>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className="animate__animated animate__fadeInUp mt-3">
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Text><FaUser /></InputGroup.Text>
                <Form.Control 
                  type="text" 
                  name="username" 
                  value={credentials.username} 
                  onChange={handleChange} 
                  required 
                />
              </InputGroup>
              <Form.Control.Feedback type="invalid">
                Please provide a valid username.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <InputGroup.Text><FaLock /></InputGroup.Text>
                <Form.Control 
                  type="password" 
                  name="password" 
                  value={credentials.password} 
                  onChange={handleChange} 
                  required 
                />
              </InputGroup>
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">Login</Button>
          </Form>
          <div className="mt-3">
            <Button variant="outline-danger" className="w-100 mb-2" onClick={() => alert('Login with Google')}>
              <i className="fab fa-google me-2"></i>Login with Google
            </Button>
            <Button variant="outline-primary" className="w-100" onClick={() => alert('Login with Facebook')}>
              <i className="fab fa-facebook-f me-2"></i>Login with Facebook
            </Button>
          </div>
          <div className="mt-3">
            <Link to="/register" className="d-block">Don't have an account? Register</Link>
            <Link to="/forgot-password" className="d-block">Forgot your password?</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;


