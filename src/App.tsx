// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MyCardsPage from './pages/CardsPage';
import EditCardPage from './pages/EditCardPage'
import SandboxPage from './pages/SandboxPage';
import DarkModePage from './pages/DarkModePage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import './App.css';


const App: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/my-cards" element={<MyCardsPage />} />
        <Route path="/edit-card/:id" element={<EditCardPage />} />
        <Route path="/sandbox" element={<SandboxPage />} />
        <Route path="/dark-mode" element={<DarkModePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;

