import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { getAllDevProducts, getProductById } from '../../../api/product';
import { createOrder } from '../../../api/order';
import { useOrder } from '../../../contexts/OrderContext';
import axios from '../../../config/axios';

export default function CreateOrder({
  currentChat,
  socket,
  setMessages,
  setNewMessages,
  messages,
}) {
  const { setOrderId, orderId } = useOrder();
  const ctx = useAuth();
  const [devProducts, setDevProducts] = useState(null);
  const [devPackages, setDevPackages] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [newMessageOrder, setNewMessageOrder] = useState(null);

  function useRegex(input) {
    let regex = /order: /i;
    return regex.test(input);
  }

  useEffect(() => {
    const getDevProducts = async () => {
      const res = await getAllDevProducts(ctx.dev?.id);
      setDevProducts(res);
    };
    getDevProducts();
  }, [ctx.dev?.id]);

  const handleSelectProduct = (el) => {
    setSelectedProduct(el);
  };

  useEffect(() => {
    if (!selectedProduct) {
      return;
    }
    const getPackage = async () => {
      const productId = +selectedProduct?.id;
      const res = await getProductById(productId);
      setDevPackages(res);
    };
    getPackage();
  }, [selectedProduct]);

  const handleCreateOrder = async () => {
    const productId = selectedProduct.id;
    const packageId = selectedPackage.id;

    const res = await createOrder({
      productId: selectedProduct.id,
      packageId: selectedPackage.id,
      userId: 2,
    });
    setOrderId(res?.data?.createdOrder?.id);
    setNewMessageOrder('order: ' + res?.data?.createdOrder?.id);
    //ใส่ลอจิคให้มันขึ้นแชท ให้ลูกค้ากดจ่ายเงิน/ดูรายละเอียดได้

    const message = {
      sender: ctx.clientChat.id,
      message: newMessageOrder,
      conversationId: currentChat.id,
    };

    console.log(message);
    const receiverId =
      currentChat.senderId === ctx.clientChat.id
        ? currentChat.receiverId
        : currentChat.senderId;

    socket.current.emit('sendMessage', {
      senderId: ctx?.clientChat.id,
      receiverId,
      message: newMessageOrder,
    });

    try {
      const res = await axios.post('/messages', message);
      setMessages([...messages, res.data]);
      setNewMessages('');
      setNewMessageOrder('');
      setOrderId('');
    } catch (err) {
      console.log(err);
    }
  };

  // socket.current.emit('sendMessage', {
  //   senderId: ctx?.clientChat?.id,
  //   // receiverId,
  //   message: newMessages,
  // });

  // const test = 'order: ' + { orderId };
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-1/2 h-1/2 gap-5 flex flex-col">
        <h3>Create Order</h3>

        <div className="dropdown">
          <label tabIndex="0" className="btn btn-outline btn-info m-1">
            Select Product: {selectedProduct ? selectedProduct.title : ''}
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {devProducts?.map((el, idx) => (
              <li key={idx}>
                <button
                  className="btn btn-ghost"
                  onClick={() => handleSelectProduct(el)}
                >
                  {el.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="dropdown">
          <label tabIndex="0" className="btn btn-outline btn-info m-1">
            Select Package: {selectedPackage ? selectedPackage.title : ''}
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {devPackages &&
              devPackages?.Packages.map((el, idx) => (
                <li key={idx}>
                  <button
                    className="btn btn-ghost"
                    onClick={() => setSelectedPackage(el)}
                  >
                    {el.title}
                  </button>
                </li>
              ))}
          </ul>
        </div>

        {selectedPackage && (
          <div>
            <h5>Description</h5>
            <ul>
              <li>category: {selectedProduct.category} </li>
              {Object.entries(selectedPackage).map((el, idx) => {
                if (el[0] === 'PackageDetails') {
                  return;
                }
                return (
                  <li key={idx}>
                    {el[0]} :{el[1]}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <button
          className={`btn btn-info ${!selectedPackage && 'btn-disabled'}`}
          onClick={() => handleCreateOrder()}
        >
          create order
        </button>
      </div>
    </div>
  );
}
