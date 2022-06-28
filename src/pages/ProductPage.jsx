import React from 'react';
import Carousel from '../components/carousel/Carousel';
import Navbar from '../components/navbars/Navbar';
import ProductDetails from '../components/products/ProductDetails';
import PackageDetails from '../components/products/PackageDetails';
import { getProductById } from '../api/product';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProductById();
      setProduct(res);
    };
    fetchProduct();
  }, []);

  const mockData = {
    product: {
      id: 1,
      title: 'test update product2',
      info: '<p>testupdateinfo</p>',
      category: 'mobile',
      Dev: {
        id: 1,
        email: 'devJohn@email.com',
        username: 'devJohn',
        firstName: 'jack',
        lastName: 'Doe',
        profileImage:
          'https://res.cloudinary.com/dy16sfjjx/image/upload/v1656070405/dev-cat/user-profile/gu5gl5fn910ieoeqpig9.png',
        lastLogin: '2022-06-24T17:47:35.000Z',
      },
      ProductImages: [
        {
          id: 1,
          image:
            'https://res.cloudinary.com/dy16sfjjx/image/upload/v1656151220/dev-cat/product-image/ppcfd9snj4pvh4cwrhrl.jpg',
          role: 'standard',
          createdAt: '2022-06-25T10:00:21.000Z',
        },
        {
          id: 2,
          image:
            'https://res.cloudinary.com/dy16sfjjx/image/upload/v1656151256/dev-cat/product-image/yibmpyxgntmk9kekbhdj.jpg',
          role: 'thumbnail',
          createdAt: '2022-06-25T10:00:56.000Z',
        },
        {
          id: 3,
          image:
            'https://res.cloudinary.com/dy16sfjjx/image/upload/v1656151277/dev-cat/product-image/nmr8b3hjfmznss2fiior.jpg',
          role: 'carousel',
          createdAt: '2022-06-25T10:01:17.000Z',
        },
        {
          id: 4,
          image:
            'https://res.cloudinary.com/dy16sfjjx/image/upload/v1656151598/dev-cat/product-image/yrjxtkgyuy6lifoypbc9.jpg',
          role: 'carousel',
          createdAt: '2022-06-25T10:06:39.000Z',
        },
      ],
      Packages: [
        {
          id: 1,
          title: 'test add package',
          info: '<p>package info</p>',
          revision: 3,
          duration: 10,
          price: '5000',
          PackageDetails: [
            {
              id: 1,
              title: 'Responsive design',
              value: '1',
            },
            {
              id: 1,
              title: 'Responsive design2',
              value: '3',
            },
          ],
        },
        {
          id: 4,
          title: 'test add package 1/2',
          info: '<p>package info</p>',
          revision: 3,
          duration: 10,
          price: '1000',
          PackageDetails: [
            {
              id: 4,
              title: 'Responsive design',
              value: '0',
            },
            {
              id: 4,
              title: 'Responsive design2',
              value: '1',
            },
          ],
        },
      ],
      ProductReviews: [
        {
          message: 'best dev ever',
          isAnonymous: false,
          rate: '5',
          userId: 2,
          User: {
            id: 2,
            username: 'jane',
            profileImage:
              'https://res.cloudinary.com/dy16sfjjx/image/upload/v1656077446/dev-cat/user-profile/udmlvimls4fylru5xiwe.png',
          },
        },
      ],
    },
  };

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
        <div className="grid grid-cols-4 grid-rows-4 w-full h-3/6">
          <div className="col-start-1 col-span-2 row-start-1 row-span-4 bg-slate-300">
            {/* <Carousel /> */}
          </div>
          <div className="col-start-3 col-span-2 row-span-2 bg-fuchsia-400"></div>
          <div className="col-start-3 row-start-3 bg-fuchsia-600"></div>
          <div className="col-start-4 row-start-3 bg-fuchsia-200"></div>
          <div className="col-start-3 row-start-4 bg-fuchsia-300"></div>
          <div className="col-start-4 row-start-4 bg-fuchsia-100"></div>
        </div>
        <div>
          <ProductDetails message={product.info} />
        </div>
        <div>
          <div className="flex">
            <p>Package</p>
            <button class="btn btn-outline btn-info btn-sm">
              Edit Package
            </button>
            <PackageDetails product={product.Packages} />
          </div>
        </div>
        <div>
          <Reviews />
        </div>
      </div>
    </div>
  );
}
