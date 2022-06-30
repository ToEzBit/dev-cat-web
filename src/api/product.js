import axios from '../config/axios';

export const createProduct = async (input) => {
  const res = await axios.post('/products', input);
  return res.data.createdProduct;
};

export const addProductPackage = async (id, input) => {
  await axios.post(`/products/${id}/package`, input);
};
