import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para tratamento de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Aqui podemos adicionar lógica para tratamento de erros
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api; 