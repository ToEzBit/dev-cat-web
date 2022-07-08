import axios from '../config/axios';

export const getDevProfile = async (id) => {
  const res = await axios.get(`/dev/${id}`);
  return res.data.dev;
};

export const getDevPortfolio = async (id) => {
  const res = await axios.get(`/dev/portfolio/${id}`);
  return res.data.portfolio;
};
