// src/services/authService.ts
import axios from 'axios';

const API_URL = 'http://localhost:5000';

const getToken = async (user: any) => {
  try {
    const response = await axios.post(`${API_URL}/token`, user);
    return response.data.token;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error;
  }
};

export { getToken };
