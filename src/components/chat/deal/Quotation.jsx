import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../../../contexts/OrderContext';
import CheckoutPage from '../../../pages/CheckoutPage';
import { Navigate } from 'react-router-dom';
import OrderDetails from './OrderDetails';

function Quotation({ ProfilePic, MyOrder, selectedProduct, selectedPackage }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full ">
        <div className="flex p-4 items-center gap-4">
          <div className="w-12 rounded-full">
            <img src={ProfilePic} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4 border p-4 shadow-md shadow-bg-home-content text-chat rounded-lg  border-stroke">
              <div className="flex justify-between items-baseline px-4">
                <h5>My Order</h5>
                <div>MyOrder.price || '3,000 BAHT'</div>
              </div>
              <div className="text-chat-quotation">
                'Quick quiz is the easiest way to make quizzes FREE'
              </div>
              <div className="grid grid-cols-2 gap-4 px-4">
                <label
                  for="my-modal"
                  className="btn bg-bg-home-content modal-button"
                >
                  View Details
                </label>

                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                  <div
                    className="modal-box relative
                  "
                  >
                    <label
                      for="my-modal-3"
                      class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>

                    <OrderDetails
                      selectedProduct={selectedProduct}
                      selectedPackage={selectedPackage}
                    />
                  </div>
                </div>
                <label
                  for="my-modal"
                  className="btn bg-bg-home-content modal-button"
                >
                  Checkout Page
                </label>

                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box">
                    <CheckoutPage />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xs text-slate-400">8.00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotation;
