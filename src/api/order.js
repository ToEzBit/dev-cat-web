import axios from '../config/axios';

export const createPaymentIntent = async (items) => {
  const res = await axios.post(`/orders/paymentIntent`);
  return res.data.clientSecret;
};
