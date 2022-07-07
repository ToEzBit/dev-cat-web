import React from 'react';

export default function OrderDetails({ order }) {
  return (
    <div className="w-full h-full flex justify-center items-center overflow-auto">
      <div className="w-1/2xw gap-5 flex flex-col">
        <h3>Order details</h3>

        <div>
          <p className="font-bold tracking-wide text-text-btn">
            {order?.Product?.title}
          </p>
          <p className="font-sm">{order?.Package?.title}</p>
          <p>
            <span className="font-bold">category: </span>
            {order?.Product?.category}
          </p>
          <p>
            <span className="font-bold">price: </span>
            {order?.totalPrice}
          </p>
          <p>
            <span className="font-bold">working duration: </span>
            {order?.totalDuration}
          </p>
          <p>
            <span className="font-bold">revision available: </span>
            {order?.currentRevision}/{order?.totalRevision}
          </p>
        </div>
      </div>
    </div>
  );
}
