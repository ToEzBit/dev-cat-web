import { createContext, useContext, useEffect, useState } from 'react';
import { createProductReview, updateProductReview } from '../../api/product';

const ProductContext = createContext();
function ProductContextProvider({ children }) {
  const handleCreateProductReview = async (input, productId) => {
    try {
      const res = await createProductReview(input, productId);
      return res.data.createdReview;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider value={{ handleCreateProductReview }}>
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () => {
  const ctx = useContext(ProductContext);
  return ctx;
};

export default ProductContextProvider;
export { useProduct };
