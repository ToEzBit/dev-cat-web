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
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProductById(productId);
      setProduct(res);
      setReviews(res?.ProductReviews);
    };
    fetchProduct();
  }, [render]);

  const specialPackage = {};

  product?.Packages?.map((el, idx) =>
    Object.entries(el).map((element, index) => {
      if (element[0] == 'PackageDetails') {
        element[1].map((ele, indx) => {
          let title = ele.title;
          let value = ele.value;
          if (!specialPackage[title]) {
            specialPackage[title] = [value];
          } else if (specialPackage[title]) {
            specialPackage[title].push(value);
          }
        });
      }
    }),
  );
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-10/12 h-screen flex flex-col gap-5">
        <div className="flex justify-end gap-2">
          <button className="btn btn-outline btn-info btn-sm">Edit</button>
          <button className="btn btn-outline btn-info btn-sm">Delete</button>
        </div>
        <div className="w-full min-h-16">
          <PhotoCollage photo={product.ProductImages} />
        </div>
        <div className="w-full">
          <ProductDetails message={product.info} />
        </div>
        <div>
          <div className="flex w-full justify-between">
            <p>Package</p>
            <button className="btn btn-outline btn-info btn-sm">
              Edit Package
            </button>
          </div>
        </div>
        <div>
          <PackageDetails product={product?.Packages} />
        </div>
        <div className="w-full">
          <DevProfileCard
            id={product?.Dev?.id}
            email={product?.Dev?.email}
            username={product?.Dev?.username}
            firstName={product?.Dev?.firstName}
            lastName={product?.Dev?.lastName}
            profileImage={product?.Dev?.lastName}
          />
        </div>
      </div>
      <div>
        <Reviews
          reviews={reviews}
          setReviews={setReviews}
          setProductByIDRender={setRender}
        />
      </div>
      <Footer />
    </div>
  );
}
