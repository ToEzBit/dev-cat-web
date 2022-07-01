import axios from 'axios';
import { getAccessToken } from '../services/localStorage';

// axios.defaults.baseURL = 'http://103.74.253.125:8000';
axios.defaults.baseURL = 'http://localhost:8888';

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axios;
