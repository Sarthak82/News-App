import axios from 'axios';

const API_BASE_URL = 'https://us-central1-newbackend-2bfe8.cloudfunctions.net/api'; 

export const fetchNews = async (params) => {
  try {
    const response = await axios.get(API_BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return { error: 'Failed to fetch news' };
  }
};
