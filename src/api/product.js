import axios from '../config/axios';

export const createProductReview = async (input, productId) => {
  const res = await axios.post(`/products/${productId}/review`, input);
  console.log(res);
  // return res.data.createdReview;
};

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

export const deleteProductReview = async (productId) => {
  const res = await axios.delete(`/products/${productId}`);
  return res.data;
};
