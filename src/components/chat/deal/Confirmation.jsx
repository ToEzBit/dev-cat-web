import axios from 'axios';
import React from 'react';
import {
  orderIsCompleted,
  // orderNeedsRevision
} from '../../../api/order';
import { useOrder } from '../../../contexts/OrderContext';
import OrderReview from './OrderReview';
import { useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import RequiredEdit from '../../modal/RequiredEdit';

function Confirmation({ message, currentUser, currentChat, getOrderId }) {
  const { orderId } = useOrder();
  const ctx = useAuth();
  //fetch userId
  console.log(getOrderId);

  // useEffect(() => {
  //   const fetch = async ()  => {

  //     if (ctx.clientChat.id % 2 === 0) {
  //       const getOrderIdStatus = await axios.get(
  //         `/user/order/${getOrderId}`,
  //       );

  //     } else {
  //       const getOrderIdStatus = await axios.get(
  //         `/dev/order/${getOrderId}`,
  //       );

  //     }
  //   }
  //   })
  const handleComplete = async () => {
    await orderIsCompleted(getOrderId);
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
              <div className="grid grid-cols-2 gap-4 items-center ">
                <button
                  className="border p-2 rounded-lg border-bg-home-content"
                  onClick={() => handleComplete()}
                >
                  Agree
                </button>
                {/* ======================= Required Edit ========================== */}
                <div className=" ">
                  <button>
                    <label
                      htmlFor="Required-modal"
                      className=" border px-4 py-2.5 rounded-lg border-bg-home-content "
                      role="button"
                    >
                      Required Edit
                    </label>
                  </button>
                  <input
                    type="checkbox"
                    id="Required-modal"
                    className="modal-toggle"
                  />

                  <div className="modal">
                    <div className="modal-box">
                      <RequiredEdit getOrderId={getOrderId} />
                    </div>
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
