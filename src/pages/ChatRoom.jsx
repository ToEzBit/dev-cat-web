import React, { useRef, useState } from 'react';
import Navbar from '../components/navbars/Navbar';
import { motion } from 'framer-motion';
import ProfilePic from '../asset/image/ProfilePic.png';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';
import StartWork from '../components/modal/StartWork';
import axios from 'axios';
import Conversation from '../components/chat/conversation/Conversation';
import Message from '../components/chat/Message';
import Quotation from '../components/chat/deal/Quotation';
import Confirmation from '../components/chat/deal/Confirmation';
import InputChat from '../components/chat/InputChat';
import { io } from 'socket.io-client';
import Submit from '../components/modal/Submit';
import SpecialRequirement from '../components/modal/SpecialRequirement';
import SendImage from '../components/chat/conversation/SendImage';
import Step from '../components/chat/step/Step';
import CreateOrder from '../components/chat/deal/CreateOrder';
import OrderDetails from '../components/chat/deal/OrderDetails';
import { current } from 'daisyui/src/colors';

function ChatRoom() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [getOrderId, setGetOrderId] = useState(null);
  const [getOrderStatus, setGetOrderStatus] = useState(null);
  const [getOrderPaymentStatus, setGetOrderPaymentStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [fetchOrder, setFetchOrder] = useState(false);

  const [currentValue, setCurrentValue] = useState(0);

  const [stepOrder, setStepOrder] = useState({});
  const socket = useRef();
  const [newMessages, setNewMessages] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const scrollRef = useRef();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [getDevProfile, setGetDevProfile] = useState({});

  const [interlocutor, setInterlocutor] = useState(null);

  const [loading, setLoading] = useState(false);

  const ctx = useAuth();

  useEffect(() => {
    const getOrder = async () => {
      try {
        if (ctx.user) {
          // setClientChat(res?.data?.user);
          const res = await axios.get('/user/orders/');
          setGetOrderId(res?.data?.orders);
        }
        if (ctx.dev) {
          const resDev = await axios.get('/dev/orders/');
          setGetOrderId(resDev?.data?.orders);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getOrder();
  }, [ctx?.clientChat?.id, fetchOrder]);

  useEffect(() => {
    socket.current = io('ws://103.74.253.125:8080');
    socket.current.on('getMessage', (data) => {
      setArrivalMessage({
        sender: data.senderId,
        message: data.message,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    const isInclude = currentChat?.Chats.some((el) => {
      return el.sender === arrivalMessage.sender;
    });
    arrivalMessage &&
      isInclude &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit('addUser', ctx?.clientChat?.id);
    socket.current.on('getUsers', (users) => {
      setOnlineUsers(users);
    });
  }, [ctx?.clientChat]);

  useEffect(() => {
    setLoading(true);
    const getConversations = async () => {
      try {
        const res = await axios.get('/conversations/' + ctx?.clientChat?.id);
        // console.log(...res.data);
        const arrayConversations = [...res.data];
        setConversations(arrayConversations);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
    setLoading(false);
  }, [ctx?.clientChat?.id]);

  //onclick = navigate to chatroom/conversationId
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get('/messages/' + currentChat?.id);
        setMessages(res.data);
        // console.logw(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: ctx.clientChat.id,
      message: newMessages,
      conversationId: currentChat.id,
    };

    const receiverId =
      currentChat.senderId !== ctx.clientChat.id
        ? currentChat.senderId
        : currentChat.receiverId;

    socket.current.emit('sendMessage', {
      senderId: ctx?.clientChat.id,
      receiverId,
      message: newMessages,
    });

    try {
      const res = await axios.post('/messages', message);
      setMessages([...messages, res.data]);
      setNewMessages('');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const getOrderStatus = async () => {
      if (currentChat) {
        if (currentChat.Chats.length !== 0) {
          var allOrderId = currentChat?.Chats?.filter((e) => {
            let arrayOrderId = e?.message?.startsWith('order: ');
            return arrayOrderId;
          });
          const lastIndexAllOrderId = allOrderId.length - 1;
          var getLastOrderId = allOrderId[
            lastIndexAllOrderId
          ]?.message?.replace('order: ', '');

          if (ctx.user) {
            if (getLastOrderId) {
              const getOrderIdStatus = await axios.get(
                `/user/order/${getLastOrderId}`,
              );
              setStepOrder(getOrderIdStatus?.data?.order);
              setOrderId(getLastOrderId);
              setGetOrderStatus(getOrderIdStatus?.data?.order?.status);
              setGetOrderPaymentStatus(
                getOrderIdStatus.data.order.paymentStatus,
              );
            }
          }
          if (ctx.dev) {
            if (getLastOrderId) {
              const getOrderIdStatus = await axios.get(
                `/dev/order/${getLastOrderId}`,
              );
              setStepOrder(getOrderIdStatus?.data?.order);
              setOrderId(getLastOrderId);
              setGetOrderStatus(getOrderIdStatus?.data?.order?.status);
              setGetOrderPaymentStatus(
                getOrderIdStatus.data.order.paymentStatus,
              );
            }
          }
        } else {
          setGetOrderStatus(null);
          setStepOrder({});
          setCurrentValue(0);
          setOrderId(null);
        }
      }
    };
    getOrderStatus();
  }, [currentChat, getOrderStatus, orderId, fetchOrder]);

  useEffect(() => {
    const res = async () => {
      if (currentChat) {
        const receiverId =
          currentChat.senderId !== ctx.clientChat.id
            ? currentChat.senderId
            : currentChat.receiverId;
        if (receiverId % 2 === 0) {
          const res = await axios.get(`/user/${receiverId}`);
          setInterlocutor(res.data.user);
        } else {
          const res = await axios.get(`/dev/${receiverId}`);
          setInterlocutor(res.data.dev);
        }
      }
    };
    res();
  }, [currentChat]);

  useEffect(() => {
    const res = async () => {
      if (currentChat) {
        const res = await axios.get(`/dev/${currentChat.receiverId}`);
        setGetDevProfile(res.data.dev);
        console.log(getDevProfile);
      }
    };
    res();
  }, [currentChat]);

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // className=" w-screen h-screen fixed "
        >
          <div className=" w-screen h-[20vh]  ">
            <Navbar />
            {/* ============================================ Nav Chat  ===================================================== */}
            <div className="grid grid-cols-4 border items-baseline  ">
              <div className="col-span-1">
                <div className="px-8 py-6 ">
                  <div className="grid grid-cols-3 justify-center gap-4 w-full items-center">
                    <div className="form-control col-span-2 py-1">
                      Conversation
                      {/* <input
                        type="text"
                        placeholder="Search"
                        className=" h-8 input   input-bordered   shadow-2xl shadow-bg-home-content"
                      /> */}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="  text-slate-400 rounded-lg bg-white">
                        Status:
                      </div>
                      <div className=" font-semibold  text-chat">Active</div>
                    </div>
                  </div>
                </div>
              </div>
              {ctx.dev ? (
                <div className=" col-span-2 border-x">
                  <div className="px-8 py-6 ">
                    <div className="flex justify-center gap-4 relative  w-full items-center ">
                      <div className="flex flex-col text-chat-quotation font-semibold  items-center px-4">
                        <h5 className="  font-bold tracking-wide text-xl">
                          {interlocutor?.username.toUpperCase()}
                        </h5>
                      </div>
                      {getOrderStatus === null ||
                      getOrderStatus === 'completed' ||
                      getOrderStatus === 'cancelled' ? (
                        <div>
                          {currentChat ? (
                            <>
                              <label
                                htmlFor="createOrder-modal"
                                className=" border   px-4 rounded-lg text-chat border-stroke shadow-md shadow-bg-home-content modal-button text-center "
                                role="button"
                              >
                                Create Order
                              </label>

                              <input
                                type="checkbox"
                                id="createOrder-modal"
                                className="modal-toggle"
                              />

                              <div className="modal w-full h-full">
                                <div className="modal-box  w-full h-full">
                                  <CreateOrder
                                    currentChat={currentChat}
                                    socket={socket}
                                    setMessages={setMessages}
                                    setNewMessages={setNewMessages}
                                    messages={messages}
                                    setFetchOrder={setFetchOrder}
                                  />
                                </div>
                              </div>
                            </>
                          ) : null}
                        </div>
                      ) : getOrderStatus === 'pending' ? (
                        <div>
                          <button>
                            <label
                              htmlFor="save-modal"
                              className=" border px-4 rounded-lg text-chat border-stroke shadow-md shadow-bg-home-content modal-button text-center "
                              role="button"
                            >
                              START
                            </label>
                          </button>
                          <input
                            type="checkbox"
                            id="save-modal"
                            className="modal-toggle"
                          />

                          <div className="modal">
                            <div className="modal-box">
                              <StartWork
                                currentChat={currentChat}
                                setFetchOrder={setFetchOrder}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <button>
                            <label
                              htmlFor="submit-modal"
                              className=" border px-4 rounded-lg text-chat border-stroke shadow-md shadow-bg-home-content modal-button text-center "
                              role="button"
                            >
                              SUBMIT
                            </label>
                          </button>
                          <input
                            type="checkbox"
                            id="submit-modal"
                            className="modal-toggle"
                          />

                          <div className="modal">
                            <div className="modal-box">
                              <Submit
                                orderId={orderId}
                                setMessages={setMessages}
                                messages={messages}
                                currentChat={currentChat}
                                socket={socket}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {/* ============================= Create Order  ================================== */}

                      {/* ============================= Create Order  ================================== */}

                      {/* =============================  start work  ================================== */}

                      {/* =============================  start work  ================================== */}
                      {/* ============================= SUBMIT  ================================== */}

                      {/* ============================= SUBMIT  ================================== */}
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" col-span-2 border-x">
                  <div className=" py-6 flex flex-col text-chat-quotation font-semibold  items-center px-4">
                    <h5>{interlocutor?.username}</h5>
                  </div>
                </div>
              )}
              <div className="col-span-1">
                <div className="px-8 py-6  ">
                  <div className="grid grid-cols-2 justify-center gap-4 w-full items-center">
                    <div className="">
                      <div>Order Status</div>
                    </div>
                    <div className="text-xs font-bold  text-chat rounded-lg text-end bg-white">
                      ORDER DETAIL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4   h-[80vh] overflow-hidden">
            {/* ============================================ Chat left  ===================================================== */}

            <div className="  col-span-1 flex flex-col  overflow-auto py-4 ">
              {/* --------------- History Chat -------------- */}
              {conversations.map((c, index) => {
                let online = false;
                let id =
                  ctx.clientChat.id !== c.senderId ? c.senderId : c.receiverId;

                onlineUsers.map((el) => {
                  if (el.userId === id) {
                    return (online = true);
                  } else {
                    return;
                  }
                });

                return (
                  <div key={index} onClick={() => setCurrentChat(c)}>
                    {console.log(currentChat)}
                    <Conversation
                      online={online}
                      conversation={c}
                      currentUser={ctx.clientChat}
                      updatedAt={c.updatedAt}
                    />
                  </div>
                );
              })}
            </div>

            {/* ============================================ Chat Center  ===================================================== */}

            <div className="border-x col-span-2 relative">
              {currentChat ? (
                <>
                  {/* --------------- header center Chat -------------- */}

                  {/* --------------- dev center Chat -------------- */}
                  <div className="px-12 py-8 flex flex-col gap-8  overflow-auto max-h-[80vh] pb-14">
                    {messages?.map((m, index) => {
                      let i = m?.message?.match(
                        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/g,
                      );
                      let p = m?.message?.match(
                        /([/|.|\w|\s|-])(?:jpg|gif|png)/g,
                      );
                      let u = m?.message?.match(/order:/i);
                      if (u) {
                        return (
                          <div key={index} className="" ref={scrollRef}>
                            <Quotation
                              currentOrder={stepOrder}
                              array={messages}
                              loading={loading}
                              message={m}
                              own={m.sender === ctx.clientChat.id}
                              currentUser={ctx.clientChat}
                              ProfilePic={ProfilePic}
                              getOrderPaymentStatus={getOrderPaymentStatus}
                              setSelectedOrder={setSelectedOrder}
                              selectedOrder={selectedOrder}
                              getOrderId={getOrderId}
                              getOrderStatus={getOrderStatus}
                              orderId={orderId}
                              setFetchOrder={setFetchOrder}
                            />
                          </div>
                        );
                      } else if (p) {
                        return (
                          <div key={index} className="" ref={scrollRef}>
                            <SendImage
                              array={messages}
                              loading={loading}
                              message={m}
                              own={m.sender === ctx.clientChat.id}
                              currentUser={ctx.clientChat}
                              ProfilePic={ProfilePic}
                            />
                          </div>
                        );
                      } else if (i) {
                        return (
                          <div key={index} className="" ref={scrollRef}>
                            <Confirmation
                              array={messages}
                              currentChat={currentChat}
                              getOrderId={getOrderId}
                              message={m}
                              own={m.sender === ctx.clientChat.id}
                              currentUser={ctx.clientChat}
                              getOrderStatus={getOrderStatus}
                              orderId={orderId}
                              setFetchOrder={setFetchOrder}
                            />
                          </div>
                        );
                      } else {
                        return (
                          <div key={index} className="" ref={scrollRef}>
                            <Message
                              array={messages}
                              ProfilePic={ProfilePic}
                              message={m}
                              own={m.sender === ctx.clientChat.id}
                              currentUser={ctx.clientChat}
                            />
                          </div>
                        );
                      }
                    })}

                    {/* <div>{messages?.map((m, index) => (
                      <div className="" ref={scrollRef}>
                        <Message
                          key={index}
                          ProfilePic={ProfilePic}
                          message={m}
                          own={m.sender === ctx.user.id}
                          currentUser={ctx.user}
                        />
                      </div>
                    ))}</div> */}
                    {/* --------------- dev Quotation Chat -------------- */}
                    {/* <Quotation ProfilePic={ProfilePic} /> */}
                    {/* --------------- dev Confirm Chat -------------- */}
                    {/* <Confirmation /> */}
                    {/* --------------- input Chat center -------------- */}
                  </div>
                  <div className="absolute bottom-0 w-full bg-white py-2">
                    <InputChat
                      setMessages={setMessages}
                      messages={messages}
                      currentChat={currentChat}
                      socket={socket}
                      newMessages={newMessages}
                      setNewMessages={setNewMessages}
                      handleSubmit={handleSubmit}
                      loading={loading}
                      setLoading={setLoading}
                    />
                  </div>
                </>
              ) : (
                <div className=" text-6xl text-center p-24 opacity-20 ">
                  Open a conversation to start a chat
                </div>
              )}
            </div>
            {/* ============================================ Chat Right  ===================================================== */}
            <div className=" col-span-1 flex flex-col  overflow-auto px-10 py-6 h-full   gap-4">
              {/* <div className="px-8 py-6 border-y ">
            <div className="grid grid-cols-2 justify-center gap-4 w-full items-center">
              <div className="">
                <div>Order Status</div>
              </div>
              <div className="text-xs font-bold  text-chat rounded-lg text-end bg-white">
                ORDER DETAIL
              </div>
            </div>
          </div> */}

              {/* --------------- History Chat -------------- */}
              {/* <div className="flex flex-col gap-8 justify-center items-center overflow-auto p-8"> */}

              <div className="text-base  w-full border rounded-lg p-4 shadow-lg shadow-bg-home-content flex items-baseline">
                <OrderDetails order={stepOrder} />
                {/* Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s */}
              </div>

              {/* --------------- steps work -------------- */}
              <Step
                order={stepOrder}
                currentValue={currentValue}
                setCurrentValue={setCurrentValue}
              />

              {/* --------------- Dev profile -------------- */}

              <div className="flex pt-4 items-center gap-4">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-12 rounded-full">
                    <img
                      src={getDevProfile?.profileImage || ProfilePic}
                      alt=""
                    />
                  </div>
                </label>

                <div className="flex flex-col gap-1">
                  <div className=" text-chat rounded-lg  border-stroke">
                    {getDevProfile?.firstName} {getDevProfile?.lastName}
                  </div>
                  <div className="text-xs text-stroke">
                    Give feedback or Report this profile
                  </div>
                </div>
              </div>

              {/* </div> */}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default ChatRoom;
