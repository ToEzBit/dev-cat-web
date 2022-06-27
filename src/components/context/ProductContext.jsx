import { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();
function ProductContextProvider({ children }) {
  [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    const getAllProduct = () => {
        
    };
  }, []);

  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
}

const useFilter = () => {
  const ctx = useContext(ProductContext);
  return ctx;
};

export default ProductContextProvider;
export { useFilter };
