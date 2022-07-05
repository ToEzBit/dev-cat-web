import axios from '../../../config/axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { useOrder } from '../../../contexts/OrderContext';
import CheckoutPage from '../../../pages/CheckoutPage';
import { Navigate } from 'react-router-dom';
import OrderDetails from './OrderDetails';
import { updateOrderStatus } from '../../../api/order';

function Quotation({
  ProfilePic,
  own,
  message,
  array,
  setSelectedOrder,
  selectedOrder,
  getOrderId,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [order, setOrder] = useState('');
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const ctx = useAuth();

  let ret = message.message.replace('order: ', '');

  useEffect(() => {
    const friendId = array.filter((e) => {
      return e.sender !== ctx.clientChat.id;
    });
    // console.log(friendId);

    const getUser = async () => {
      try {
        if (friendId.sender % 2 === 0) {
          const res = await axios.get('/user/' + friendId.sender);
          setUser(res.data.user);
          // setClientChat(res?.data?.user);
        } else {
          const resDev = await axios.get('/dev/' + friendId[0].sender);
          setUser(resDev.data.dev);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [array, ctx.clientChat.id]);

  useEffect(() => {
    const getOrder = async () => {
      try {
        if (ctx.clientChat.id % 2 === 0) {
          // setClientChat(res?.data?.user);
          const res = await axios.get('/user/order/' + ret);
          setOrder(res.data.order);
        } else {
          const resDev = await axios.get('/dev/order/' + ret);
          setOrder(resDev.data.order);
        }
      } catch (err) {
        console.log(err);
      } finally {
      }
    };

    getOrder();
    // setGetOrderId(order);
  }, [array, ctx.clientChat.id, ret]);

  const currentQuotation = getOrderId?.filter((el) => el.id == +ret);
  const handleCancel = async () => {
    await updateOrderStatus({ status: 'cancelled' }, +ret);
  };

  // console.log(selectedOrder);

  return (
    <div>
      {own ? (
        <>
          <div className="w-full flex justify-end">
            <div className="flex p-4 items-center gap-4">
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-col gap-4 border p-4 shadow-md shadow-bg-home-content bg-chat  text-white rounded-lg  border-stroke">
                  <div className="flex justify-between items-baseline px-4">
                    <h5>{message.message}</h5>
                    <div>{currentQuotation[0]?.totalPrice} BAHT</div>
                  </div>
                  <div className="text-white">
                    {currentQuotation[0]?.Product?.title}
                  </div>
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <button
                      className="border p-2 rounded-lg bg-white text-chat border-bg-home-content"
                      onClick={() => setSelectedOrder(+ret)}
                    >
                      View Detail
                    </button>
                    <button
                      className={`border p-2 rounded-lg bg-white border-bg-home-content ${
                        currentQuotation[0].status === 'cancelled'
                          ? 'text-white btn-disable'
                          : 'text-chat'
                      }`}
                      onClick={() => handleCancel()}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
              <div className="avatar">
                <div className=" w-14 rounded-full ">
                  <img src={ctx.clientChat.profileImage || ProfilePic} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full flex justify-end">
                <div className="flex p-4 items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="border p-4  shadow-md shadow-bg-home-content bg-chat text-white rounded-lg  border-stroke">
                      <img src={message.message} alt="" />
                    </div>
                    <div className="text-xs text-slate-400 flex justify-end">
                      {message.createdAt}
                    </div>
                  </div>
                  <div className="avatar ">
                    <div className="w-14 rounded-full ">
                      <img
                        src={ctx.clientChat.profileImage || ProfilePic}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div> */}
        </>
      ) : (
        <div className="flex justify-end gap-4">
          <div className="flex flex-col gap-2 ">
            <div className="flex flex-col gap-4 border p-4 shadow-md shadow-bg-home-content  text-chat rounded-lg  border-stroke">
              <div className="flex justify-between items-baseline px-4">
                <h5>{message.message}</h5>
                <div>{currentQuotation[0]?.totalPrice} BAHT</div>
              </div>
              <div className="text-chat-quotation">
                {currentQuotation[0]?.Product.title}
              </div>
              <div className="grid grid-cols-2 gap-4 px-4">
                <button className="border p-2 rounded-lg border-bg-home-content">
                  View Detail
                </button>
                <label
                  htmlFor="payment-modal"
                  className=" border px-4 rounded-lg text-chat border-stroke shadow-md shadow-bg-home-content modal-button text-center "
                  role="button"
                >
                  Pay Now!
                </label>

                <input
                  type="checkbox"
                  id="payment-modal"
                  className="modal-toggle"
                />

                <div className="modal w-full h-full">
                  <div className="modal-box">
                    <CheckoutPage orderId={currentQuotation[0].id} />
                  </div>
                </div>
              </div>
              <div className="text-xs text-slate-400">8.00 PM</div>
            </div>
            <div className="avatar ">
              <div className="w-14 rounded-full ">
                <img src={user?.profileImage || ProfilePic} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quotation;
