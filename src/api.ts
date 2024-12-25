// src/api.ts
const RANDOM_USER_API_URL = 'https://randomuser.me/api/?results=10';

export const fetchRandomUsers = async () => {
  try {
    const response = await fetch(RANDOM_USER_API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching random users:', error);
    throw error;
  }
};
