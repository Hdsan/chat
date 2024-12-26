import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getMessages = async () => {
    try {
      const response = await api.get('/messages'); 
      console.log('Posts:', response.data);
      return response.data;

    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      throw error; 
    }
  };
  
  export const sendMessage = async (message, username) => {
    try {
      const response = await api.post('/messages', { message, username }); 
      console.log(response);
      return response;

    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      throw error; 
    }
  };