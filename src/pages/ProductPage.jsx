import React from 'react';
import Carousel from '../components/carousel/Carousel';
import Navbar from '../components/navbars/Navbar';
import ProductDetails from '../components/products/ProductDetails';
import PackageDetails from '../components/products/PackageDetails';
import { getProductById } from '../api/product';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Reviews from '../components/review/Review';
import Footer from '../components/footer/Footer';
import DevProfileCard from '../components/card/DevProfileCard/DevProfileCard';
import PhotoCollage from '../components/products/PhotoCollage';

export default function ProductPage() {
  const { productId } = useParams();
  const [render, setRender] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProductById(productId);
      setProduct(res);
    };
    fetchProduct();
    console.log(render);
  }, [render]);

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-9/12 h-screen flex flex-col gap-2">
        <div className="flex justify-end gap-2">
          <button className="btn btn-outline btn-info btn-sm">Edit</button>
          <button className="btn btn-outline btn-info btn-sm">Delete</button>
        </div>
        <PhotoCollage photo={product.ProductImages} />

        <div>
          <ProductDetails message={product.info} />
        </div>
        <div>
          <div className="flex">
            <p>Package</p>
            <button className="btn btn-outline btn-info btn-sm">
              Edit Package
            </button>
            <PackageDetails product={product?.Packages} />
            {/* {console.log(product.Packages)} */}
          </div>
        </div>
        <div>
          <DevProfileCard
            id={product?.Dev?.id}
            email={product?.Dev?.email}
            username={product?.Dev?.username}
            firstName={product?.Dev?.firstName}
            lastName={product?.Dev?.lastName}
            profileImage={product?.Dev?.lastName}
          />
          <Reviews
            reviews={product?.ProductReviews}
            setProductByIDRender={setRender}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
