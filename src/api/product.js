import axios from '../config/axios';

export const createProductReview = async ({ message, rate, isAnonymous }) => {
  const res = await axios.post(`/products/:productId/review`, {
    message,
    rate,
    isAnonymous,
  });
  return res.data.createdReview;
};

// id???
export const updateProductReview = async (
  { message, rate, isAnonymous },
  productId,
) => {
  const res = await axios.patch(`/products/${productId}/review`, {
    message,
    rate,
    isAnonymous,
  });
  return res.data.updatedReview;
};

export const getProductById = async (productId) => {
  const res = await axios.get(`/products/${productId}`);
  return res.data.product;
};
