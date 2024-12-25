// src/pages/UserProfilePage.tsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaCamera } from 'react-icons/fa';
import 'animate.css';
import { useTheme } from '../context/ThemeContext';

const UserProfilePage: React.FC = () => {
  const { darkMode } = useTheme();

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    profileImage: 'path_to_default_profile_image.jpg',
  });

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      const loggedInUser = users[0]; // נניח שהמשתמש המחובר הוא הראשון ברשימה
      setUserDetails({
        firstName: loggedInUser.name.first,
        lastName: loggedInUser.name.last,
        username: loggedInUser.login.username,
        email: loggedInUser.email,
        password: '',
        profileImage: loggedInUser.picture.large,
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    const updatedUsers = users.map((user: any) =>
      user.email === userDetails.email ? { ...user, ...userDetails } : user
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('User details updated successfully!');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setUserDetails({ ...userDetails, profileImage: event.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Container className={`container-full mt-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Row>
        <Col md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} className="text-center">
          <h1 className={`mb-4 ${darkMode ? 'text-light' : 'text-dark'}`}>Profile</h1>
          <div className="mb-4">
            <Image src={userDetails.profileImage} roundedCircle width="150" height="150" className="mb-3" />
            <Button variant="outline-primary" as="label">
              <FaCamera /> Change Photo
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </Button>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label><FaUser /> First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={userDetails.firstName}
                onChange={handleChange}
                required
                className={`form-control form-control-lg ${darkMode ? 'bg-dark text-light' : ''}`}
              />
            </Form.Group>
            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label><FaUser /> Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={userDetails.lastName}
                onChange={handleChange}
                required
                className={`form-control form-control-lg ${darkMode ? 'bg-dark text-light' : ''}`}
              />
            </Form.Group>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label><FaUser /> Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={userDetails.username}
                onChange={handleChange}
                required
                className={`form-control form-control-lg ${darkMode ? 'bg-dark text-light' : ''}`}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label><FaEnvelope /> Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                required
                className={`form-control form-control-lg ${darkMode ? 'bg-dark text-light' : ''}`}
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label><FaLock /> New Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                placeholder="Leave blank to keep the current password"
                className={`form-control form-control-lg ${darkMode ? 'bg-dark text-light' : ''}`}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;






