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

function ChatRoom() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [friendId, setFriendId] = useState(null);
  const [getOrderId, setGetOrderId] = useState(null);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [getOrderStatus, setGetOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);
  // const [notification, setNotification] = useState(false);
  //socket io

  const [stepOrder, setStepOrder] = useState({});
  const socket = useRef();
  //inputChat
  const [newMessages, setNewMessages] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const scrollRef = useRef();
  //Online user
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState([]);
  //notification
  // const [notification, setNotification] = useState(false);
  const [currentChatroom, setCurrentChatroom] = useState(undefined);

  const [loading, setLoading] = useState(false);

  const ctx = useAuth();
  // console.log(getOrderId);

  // useEffect(() => {
  //   const getOrder = async () => {
  //     try {
  //       const res = await axios.get('/user/order/' + selectedOrder);
  //       setSelectedOrder(res.data.orders);
  //       // console.log(selectedOrder);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getOrder();
  // }, [selectedOrder]);

  useEffect(() => {
    const getOrder = async () => {
      try {
        if (ctx?.clientChat?.id % 2 === 0) {
          // setClientChat(res?.data?.user);
          const res = await axios.get('/user/orders/');
          setGetOrderId(res?.data?.orders);
          // console.log(getOrderId);
        } else {
          const resDev = await axios.get('/dev/orders/');
          setGetOrderId(resDev?.data?.orders);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getOrder();
  }, [ctx?.clientChat?.id]);

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
        console.log(...res.data);
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
        console.log(res.data);
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
        var allOrderId = currentChat?.Chats?.filter((e) => {
          console.log(currentChat?.Chats);
          let arrayOrderId = e?.message?.startsWith('order: ');
          return arrayOrderId;
        });
        var getLastOrderId = allOrderId[0]?.message?.replace('order: ', '');
        // console.log(ctx.clientChat);

        if (ctx.clientChat.id % 2 === 0) {
          const getOrderIdStatus = await axios.get(
            `/user/order/${getLastOrderId}`,
          );
          setStepOrder(getOrderIdStatus?.data?.order);
          setOrderId(getLastOrderId);
          setGetOrderStatus(getOrderIdStatus?.data?.order?.status);
          // console.log(getOrderIdStatus);
        } else {
          const getOrderIdStatus = await axios.get(
            `/dev/order/${getLastOrderId}`,
          );
          // console.log(getOrderIdStatus);
          setStepOrder(getOrderIdStatus?.data?.order);
          setOrderId(getLastOrderId);
          setGetOrderStatus(getOrderIdStatus?.data?.order?.status);
        }
      } else {
        // console.log('waiting');
      }
    };
    getOrderStatus();
  }, [currentChat, getOrderStatus, orderId]);

  return (
    <>
      {' '}
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
                    <div className="form-control col-span-2 ">
                      <input
                        type="text"
                        placeholder="Search"
                        className=" h-8 input   input-bordered   shadow-2xl shadow-bg-home-content"
                      />
                    </div>
                    <button className=" p-1 px-4 text-slate-400 rounded-lg bg-white">
                      Sort
                    </button>
                  </div>
                </div>
              </div>
              {ctx.dev ? (
                <div className=" col-span-2 border-x">
                  <div className="px-8 py-6 ">
                    <div className="grid grid-cols-3 justify-center gap-4 w-full items-center">
                      <div className="flex flex-col text-chat-quotation font-semibold  items-center px-4">
                        <h5>John Doe</h5>
                        <div>#01234567PP</div>
                      </div>
                      {getOrderStatus === null ||
                      getOrderStatus === 'completed' ||
                      getOrderStatus === 'cancelled' ? (
                        <div>
                          <label
                            htmlFor="specialRequirement-modal"
                            className=" border px-4 rounded-lg text-chat border-stroke shadow-md shadow-bg-home-content modal-button text-center "
                            role="button"
                          >
                            Create Order
                          </label>

                          <input
                            type="checkbox"
                            id="specialRequirement-modal"
                            className="modal-toggle"
                          />

                          <div className="modal w-full h-full">
                            <div className="modal-box">
                              <CreateOrder
                                currentChat={currentChat}
                                socket={socket}
                                setMessages={setMessages}
                                setNewMessages={setNewMessages}
                                messages={messages}
                              />
                            </div>
                          </div>
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
                              <StartWork currentChat={currentChat} />
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
                  <div className="px-8 py-6 flex flex-col text-chat-quotation font-semibold  items-center px-4">
                    <h5>John Doe</h5>
                    <div>#01234567PP</div>
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
                    {/* {console.log(c)} */}
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
                              setSelectedOrder={setSelectedOrder}
                              selectedOrder={selectedOrder}
                              getOrderId={getOrderId}
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
                              getOrderId={orderId}
                              message={m}
                              own={m.sender === ctx.clientChat.id}
                              currentUser={ctx.clientChat}
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
                  {' '}
                  Open a conversation to start a chat
                </div>
              )}
            </div>
            {/* ============================================ Chat Right  ===================================================== */}
            <div className=" col-span-1 flex flex-col  overflow-auto p-4 h-full  gap-4">
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

              <div className="text-base p-4 w-full border rounded-lg p-4 shadow-lg shadow-bg-home-content flex items-baseline">
                <OrderDetails order={stepOrder} />
                {/* Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s */}
              </div>

              {/* --------------- steps work -------------- */}
              <Step order={stepOrder} />

              {/* --------------- Dev profile -------------- */}

              <div className="flex p-4 items-center gap-4">
                <div className="w-12 rounded-full">
                  <img src={ProfilePic} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className=" text-chat rounded-lg  border-stroke">
                    John Doe
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
