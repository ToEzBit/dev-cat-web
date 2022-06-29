import axios from '../config/axios';

export const getProductById = async (productId) => {
  const res = await axios.get(`/products/${productId}`);
  return res.data.product;
};

export const createProductReview = async (input, productId) => {
  const res = await axios.post(`/products/${productId}/review`, input);
};

export const updateProductReview = async (
  { message, rate, isAnonymous },
  id,
) => {
  const res = await axios.patch(`/products/review/${id}/`, {
    message,
    rate,
    isAnonymous,
  });
  console.log(message, rate, isAnonymous);
  return res.data.updatedReview;
};

export const deleteProductReview = async (id) => {
  console.log(id);
  const res = await axios.delete(`/products/review/${id}`);
};
