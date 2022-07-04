import React from 'react';
import Navbar from '../components/navbars/Navbar';
import ProductDetails from '../components/products/ProductDetails';
import PackageDetails from '../components/products/PackageDetails';
import { getProductById } from '../api/product';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Review from '../components/review/Review';
import Footer from '../components/footer/Footer';
import PhotoCollage from '../components/products/PhotoCollage';
import { useAuth } from '../contexts/AuthContext';

export default function ProductPage() {
  const { productId } = useParams();
  const { user, dev } = useAuth();
  const [render, setRender] = useState(false);
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProductById(productId);
      setProduct(res);
      setReviews(res?.ProductReviews);
    };
    fetchProduct();
  }, [render]);

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-8/12 py-4 flex flex-col gap-5">
        {dev && dev.id === product.dev.id ? (
          <div className="flex justify-end gap-2">
            <button className="btn btn-outline btn-info btn-sm">Edit</button>
            <button className="btn btn-outline btn-info btn-sm">Delete</button>
          </div>
        ) : (
          <></>
        )}

        {Object.values(product).length > 0 && (
          <div className="w-full">
            <PhotoCollage photo={product?.ProductImages} />
          </div>
        )}
        <div className="w-full">
          <ProductDetails message={product?.info} />
        </div>
        <div>
          <div className="flex w-full justify-between">
            <p>Package</p>
            {dev && dev.id === product.dev.id ? (
              <button className="btn btn-outline btn-info btn-sm">
                Edit Package
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div>
          <PackageDetails product={product?.Packages} />
        </div>
      </div>
      <div>
        <Review
          productId={productId}
          mode="ProductPage"
          productDev={product?.Dev}
          reviews={reviews}
          setReviews={setReviews}
          setProductByIDRender={setRender}
        />
      </div>
      <Footer />
    </div>
  );
}
