import React from 'react';
import Navbar from '../components/navbars/Navbar';
import ProductDetails from '../components/products/ProductDetails';
import PackageDetails from '../components/products/PackageDetails';
import { getProductById } from '../api/product';
import { Link, useParams } from 'react-router-dom';
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

  // console.log(dev); //

  // console.log(product);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProductById(productId);
      setProduct(res);
      setReviews(res?.ProductReviews);
    };
    fetchProduct();
  }, [render]);

  return (
    <div className="w-screen mx-auto flex flex-col gap-6  items-center">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="max-w-screen-lg mx-auto w-8/12 py-4 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-baseline">
            <div className="flex gap-4 items-center">
              <Link to="/result" className="text-sm font-medium text-chat">
                {product?.category === 'web'
                  ? 'Website Developer'
                  : 'Mobile Developer'}
              </Link>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <Link
                to={`/dev/profile/${product?.Dev?.id}`}
                className="text-sm text-chat font-medium"
              >
                {product?.Dev?.username}
              </Link>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="text-sm font-semibold text-text-orange">{`${product?.title?.slice(
                0,
                20,
              )}...`}</div>
            </div>
            {dev && dev.id === product?.Dev?.id ? (
              <div className="flex justify-end gap-2">
                <button className="btn btn-outline btn-info btn-sm">
                  Edit
                </button>
                <button className="btn btn-outline btn-info btn-sm">
                  Delete
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>

          {Object.values(product).length > 0 && (
            <div className="w-full">
              <PhotoCollage photo={product?.ProductImages} />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-chat font-semibold text-2xl">
            {product?.title}
          </div>
          <div className="w-full ">
            <ProductDetails message={product?.info} />
          </div>
        </div>
        <div>
          <div className="flex w-full justify-between">
            <p className="text-chat font-semibold">Package</p>
            {dev && dev?.id === product?.Dev?.id ? (
              <button className="btn btn-outline btn-info btn-sm">
                Edit Package
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div>
          <PackageDetails
            product={product?.Packages}
            devId={product?.Dev?.id}
          />
        </div>
      </div>
      <div className="mt-6">
        <Review
          product={product}
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
