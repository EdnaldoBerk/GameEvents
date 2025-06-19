import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
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