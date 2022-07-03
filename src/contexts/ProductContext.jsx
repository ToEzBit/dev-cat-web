import { useState } from 'react';
import { createContext, useContext, useEffect } from 'react';
import { createProductReview, getAllProducts } from '../api/product';

const ProductContext = createContext();
function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const handleCreateProductReview = async (input, productId) => {
    try {
      const res = await createProductReview(input, productId);
      return res.data.createdReview;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const run = async () => {
      const res = await getAllProducts();
      const fetchProducts = res.data.products;
      setProducts(fetchProducts);
    };
    try {
      run();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ProductContext.Provider value={{ products, handleCreateProductReview }}>
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
