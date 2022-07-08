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
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);
function Confirmation({
  message,
  currentUser,
  currentChat,
  getOrderId,
  getOrderStatus,
  orderId,
  setFetchOrder,
}) {
  const ctx = useAuth();
  const timeAgo = new TimeAgo('en-US');

  // let ret = message.message.replace('order: ', '');
  // const currentQuotation = getOrderId?.filter((el) => el.id == +ret);
  const handleComplete = async () => {
    await orderIsCompleted(orderId);
    setFetchOrder((prev) => !prev);
  };

  return (
    <div>
      <div className="w-full ">
        <div className="flex p-8 justify-center items-baseline gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4 border p-12 shadow-md shadow-bg-home-content text-chat rounded-lg  border-stroke">
              <div className="flex flex-col text-chat-quotation font-semibold  items-center px-4">
                {getOrderStatus === 'completed' ? (
                  <p>This Order Is Already Completed</p>
                ) : null}
                <h5 className=" font-semibold ">CONFIRMATION</h5>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href={message?.message}
                  className="text-chat underline font-bold"
                  target="_blank"
                >
                  VIEW WORKS
                </a>
                <div className="text-chat-quotation text-[8px]">
                  click this link to view your work
                </div>
                <div className=" text-text-normal opacity-20 pt-4 -mb-4">
                  {currentUser?.username}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center ">
                {ctx.user && getOrderStatus !== 'completed' ? (
                  <>
                    {getOrderStatus === 'needRevision' ? (
                      <>
                        <p>Revision message is sended to dev</p>
                      </>
                    ) : (
                      <>
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
                              <RequiredEdit
                                getOrderId={orderId}
                                setFetchOrder={setFetchOrder}
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ) : null}
              </div>
            </div>
            {/* <div className="text-xs text-slate-400">
              {' '}
              <div> {timeAgo.format(new Date(message?.createdAt))}</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
