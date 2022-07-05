import React from 'react';
import {
  orderIsCompleted,
  // orderNeedsRevision
} from '../../../api/order';
import { useOrder } from '../../../contexts/OrderContext';
import OrderReview from './OrderReview';

function Confirmation({ message, currentUser }) {
  const { orderId } = useOrder();
  //fetch userId

  const handleComplete = async () => {
    await orderIsCompleted(orderId);
  };

  return (
    <div>
      <div className="w-full ">
        <div className="flex p-8 justify-center items-baseline gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-8 border p-8 shadow-md shadow-bg-home-content text-chat rounded-lg  border-stroke">
              <div className="flex flex-col text-chat-quotation font-semibold  items-center px-4">
                <h5>{currentUser?.username}</h5>
                <div>{message?.createdAt}</div>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href={message?.message}
                  className="text-chat underline font-bold"
                >
                  VIEW WORKS
                </a>
                <div className="text-chat-quotation text-[8px]">
                  click this link to view your work
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 ">
                <button
                  className="border p-2 rounded-lg border-bg-home-content"
                  onClick={() => handleComplete()}
                >
                  Agree
                </button>
                <button className="border p-2 px-4 rounded-lg border-bg-home-content">
                  <label
                    htmlFor="requireEdit"
                    className="btn modal-button btn-ghost"
                  >
                    Require Edit
                  </label>
                </button>
                <input
                  type="checkbox"
                  id="requireEdit"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor="my-modal-3"
                      class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <OrderReview />
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

export default Confirmation;
