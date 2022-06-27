import axios from '../config/axios';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../services/localStorage';

export const userLogin = async (input) => {
  const res = await axios.post(`/auth/user/login`, input);
  setAccessToken(res.data.token);
};

export const devLogin = async (input) => {
  const res = await axios.post(`/auth/dev/login`, input);
  setAccessToken(res.data.token);
};

export const userRegister = async (input) => {
  const res = await axios.post(`/auth/user/register`, input);
  setAccessToken(res.data.token);
};

export const devRegister = async (input) => {
  console.log('axios');
  const res = await axios.post(`/auth/dev/register`, input);
  setAccessToken(res.data.token);
};

export const logout = async () => {
  removeAccessToken();
};
