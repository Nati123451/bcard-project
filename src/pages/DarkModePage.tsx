// src/pages/DarkModePage.tsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

const DarkModePage: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Container className="mt-4">
      <h1>Dark Mode Settings</h1>
      <p>Here you can toggle between dark mode and light mode for a better viewing experience.</p>
      <Button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </Button>
    </Container>
  );
}

export default DarkModePage;
