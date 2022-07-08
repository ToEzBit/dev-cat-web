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
  console.log(res);

  return res.data.updatedReview;
};

export const getAllProducts = async () => await axios.get('/products');

export const getAllDevProducts = async (devId) => {
  const res = await axios.get(`/products/dev/${devId}`);
  return res.data.products;
};

export const deleteProductReview = async (id) => {
  const res = await axios.delete(`/products/review/${id}`);
};

export const createProduct = async (input) => {
  const res = await axios.post('/products', input);
  return res.data.createdProduct;
};

export const addProductPackage = async (id, input) => {
  await axios.post(`/products/${id}/package`, input);
};

export const addProductImage = async (id, input) => {
  await axios.post(`/products/${id}/image`, input);
};
