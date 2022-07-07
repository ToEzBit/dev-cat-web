import axios from '../../../config/axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { useOrder } from '../../../contexts/OrderContext';
import CheckoutPage from '../../../pages/CheckoutPage';
import { Navigate } from 'react-router-dom';
import OrderDetails from './OrderDetails';
import { updateOrderStatus } from '../../../api/order';

function Quotation({
  currentOrder,
  ProfilePic,
  own,
  message,
  array,
  setSelectedOrder,
  selectedOrder,
  getOrderId,
  getOrderPaymentStatus,
  getOrderStatus,
  orderId,
  setFetchOrder,
}) {
  // console.log(orderId);

  const [order, setOrder] = useState([]);

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const ctx = useAuth();

  let ret = message.message.replace('order: ', '');

  useEffect(() => {
    const friendId = array.filter((e) => {
      return e.sender !== ctx.clientChat.id;
    });

    const getUser = async () => {
      try {
        if (friendId?.sender % 2 === 0) {
          const res = await axios.get('/user/' + friendId?.sender);
          setUser(res?.data?.user);
          // setClientChat(res?.data?.user);
        } else {
          const resDev = await axios.get('/dev/' + friendId[0]?.sender);
          setUser(resDev?.data?.dev);
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
          // console.log(ret);

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

  //  }
  //fetchOrder เฉพาะไอดี
  const currentQuotation = getOrderId?.filter((el) => el.id == +ret);

  const handleCancel = async () => {
    await updateOrderStatus({ status: 'cancelled' }, +ret);
    setFetchOrder((prev) => !prev);
  };

  // console.log(currentQuotation);

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
                    <div>{`${order?.totalPrice || 6000} BATH`}</div>
                  </div>
                  <div className="text-white">
                    {currentQuotation[0]?.Product?.title ||
                      'All types of website making services Easy to use, works fast'}
                  </div>
                  {currentQuotation[0]?.status === 'cancelled' ? (
                    <p className="text-center">This order is canceled</p>
                  ) : (
                    <>
                      <div className="grid grid-cols-2 gap-4 px-4">
                        <Link
                          to={`/product/${order?.Product?.id}`}
                          className="border p-2 rounded-lg bg-white text-chat border-bg-home-content"
                          target="_blank"
                        >
                          View Detail
                        </Link>
                        <button
                          className="border p-2 rounded-lg bg-white text-chat border-bg-home-content"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  )}
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
          <div className="flex flex-row-reverse items-end gap-2 ">
            <div className="flex flex-col gap-4 border p-4 shadow-md shadow-bg-home-content  text-chat rounded-lg  border-stroke">
              <div className="flex justify-between items-baseline px-4">
                <h5>{message.message}</h5>
                <div>{`${order?.totalPrice || 6000} BATH`}</div>
              </div>
              <div className="text-chat-quotation">
                {currentQuotation[0]?.Product.title ||
                  'All types of website making services Easy to use, works fast'}
              </div>
              <div className="grid grid-cols-2 gap-4 px-4">
                {currentQuotation[0]?.status === 'cancelled' ? (
                  <p className="text-center">This order is canceled</p>
                ) : (
                  <>
                    <Link
                      to={`/product/${order?.Product?.id}`}
                      className="border p-2 rounded-lg border-bg-home-content"
                      target="_blank"
                    >
                      View Detail
                    </Link>
                    {getOrderPaymentStatus !== 'paymentReceived' ? (
                      <button
                        className="border p-2 rounded-lg border-bg-home-content"
                        onClick={() => navigate(`/checkout-page/${order.id}`)}
                      >
                        Pay Now!
                      </button>
                    ) : (
                      <p className="border p-2 rounded-lg border-bg-home-content">
                        payment received
                      </p>
                    )}
                  </>
                )}
              </div>
              <div className="text-xs text-slate-400">8.00 PM</div>
            </div>
            <div className="avatar ">
              <div className="w-16 h-16 rounded-full bg-gray-800 ">
                <img
                  src={user?.profileImage || ProfilePic}
                  alt=""
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quotation;
