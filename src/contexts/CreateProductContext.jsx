import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createProduct,
  addProductPackage,
  addProductImage,
} from '../api/product';
import { useAuth } from '../contexts/AuthContext';

const CreateProduct = createContext();

function CreateProductContextProvider({ children }) {
  const { dev } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [category, setCategory] = useState();
  const [packageArr, setPackageArr] = useState([]);

  const [imageArr, setImageArr] = useState([]);
  const [thumbnailImage, setThumbnailImage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleCreateProduct = async () => {
    try {
      const productCategory = category === 'Web Application' ? 'web' : 'mobile';
      setIsLoading(true);
      const createdProduct = await createProduct({
        title,
        info,
        category: productCategory,
      });
      if (packageArr.length === 0) {
        alert('Please add at least one package');
        return;
      }

      if (packageArr.length > 0) {
        for (const el of packageArr) {
          await addProductPackage(createdProduct.id, {
            title: el.title,
            info: el.info,
            price: el.price,
            duration: el.duration,
            revision: el.revision,
          });
        }
      }
      if (imageArr.length > 0) {
        const formData = new FormData();
        for (const el of imageArr) {
          formData.append('standard', el);
        }
        addProductImage(createdProduct.id, formData);
      }
      if (thumbnailImage.length > 0) {
        const formData = new FormData();
        formData.append('thumbnail', thumbnailImage[0]);
        await addProductImage(createdProduct.id, formData);
      }
      navigate(`dev/profile/${dev?.id}`);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CreateProduct.Provider
      value={{
        setTitle,
        setInfo,
        setCategory,
        title,
        info,
        imageArr,
        setImageArr,
        thumbnailImage,
        setThumbnailImage,
        packageArr,
        setPackageArr,
        isLoading,
        handleCreateProduct,
      }}
    >
      {children}
    </CreateProduct.Provider>
  );
}

const useCreateProduct = () => {
  const ctx = useContext(CreateProduct);
  return ctx;
};

export default CreateProductContextProvider;

export { useCreateProduct };
