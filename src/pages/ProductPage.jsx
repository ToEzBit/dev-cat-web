import React from 'react';
import Carousel from '../components/carousel/Carousel';
import Navbar from '../components/navbars/Navbar';
import ProductDetails from '../components/products/ProductDetails';

export default function ProductPage() {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-10/12 h-screen flex flex-col gap-2">
        <div className="flex justify-end gap-2">
          <button class="btn btn-outline btn-info btn-sm">Edit</button>
          <button class="btn btn-outline btn-info btn-sm">Delete</button>
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
          <ProductDetails message={message} />
        </div>
        <div>
          <div>
            <p>Package</p>
            <button class="btn btn-outline btn-info btn-sm">
              Edit Package
            </button>
            <PackageDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
