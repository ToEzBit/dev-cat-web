import { createContext, useContext, useEffect, useState } from 'react';
import { createProductReview, updateProductReview } from '../../api/product';

const ProductContext = createContext();
function ProductContextProvider({ children }) {

  const handleCreateProductReview = async (message, rate, isAnonymous) => {
    try {
      const res = await createProductReview(message, rate, isAnonymous);
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
