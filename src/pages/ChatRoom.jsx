import React, { useRef, useState } from 'react';
import Navbar from '../components/navbars/Navbar';
import { motion } from 'framer-motion';
import ProfilePic from '../asset/image/ProfilePic.png';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';
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

function ChatRoom() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [friendId, setFriendId] = useState(null);
  // const [notification, setNotification] = useState(false);
  //socket io
  const socket = useRef();
  //inputChat
  const [newMessages, setNewMessages] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const scrollRef = useRef();
  //Online user
  const [onlineUsers, setOnlineUsers] = useState([]);
  //notification
  // const [notification, setNotification] = useState(false);

  const [loading, setLoading] = useState(false);

  const ctx = useAuth();
  // console.log(conversations);

  // const receiverId = currentChat.Chats.find((sender) => console.log(sender));
  // console.log(receiverId);

  useEffect(() => {
    socket.current = io('ws://localhost:8900');
    socket.current.on('getMessage', (data) => {
      setArrivalMessage({
        sender: data.senderId,
        message: data.message,
        createdAt: Date.now(),
      });
    });
  }, []);
  console.log(currentChat?.Chats);

  // const isInclude = currentChat?.Chats.some((el) => {
  //   return el.sender === arrivalMessage.sender;
  // });

  // console.log(arrivalMessage);
  // console.log(currentChat?.Chats[0].sender === arrivalMessage.sender);
  // console.log(currentChat?.Chats[currentChat?.Chats.length - 1]);

  useEffect(() => {
    const isInclude = currentChat?.Chats.some((el) => {
      return el.sender === arrivalMessage.sender;
    });
    arrivalMessage &&
      isInclude &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  // useEffect(() => {
  //   arrivalMessage &&
  //     currentChat?.senderId &&
  //     setMessages((prev) => [...prev, arrivalMessage]);
  // }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit('addUser', ctx?.user?.id);
    socket.current.on('getUsers', (users) => {
      setOnlineUsers(users);
    });
  }, [ctx?.user]);

  useEffect(() => {
    setLoading(true);
    const getConversations = async () => {
      try {
        const res = await axios.get('/conversations/' + ctx?.user?.id);
        const arrayConversations = [...res.data];
        setConversations(arrayConversations);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
    setLoading(false);
  }, [ctx?.user?.id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get('/messages/' + currentChat?.id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: ctx.user.id,
      message: newMessages,
      conversationId: currentChat.id,
    };

    // const receiverId = currentChat.Chats.find(
    //   (el) => el.sender !== ctx.user.id,
    // );
    // console.log(receiverId);
    const receiverId =
      currentChat.senderId !== ctx.user.id
        ? currentChat.senderId
        : currentChat.receiverId;

    socket.current.emit('sendMessage', {
      senderId: ctx?.user.id,
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
              <div className=" col-span-2 border-x">
                <div className="px-8 py-6 ">
                  <div className="grid grid-cols-3 justify-center gap-4 w-full items-center">
                    <label
                      htmlFor="specialRequirement-modal"
                      className=" border px-4 rounded-lg text-chat border-stroke shadow-md shadow-bg-home-content modal-button text-center "
                      role="button"
                    >
                      Special Requirement
                    </label>

                    <input
                      type="checkbox"
                      id="specialRequirement-modal"
                      className="modal-toggle"
                    />

                    <div className="modal">
                      <div className="modal-box">
                        <SpecialRequirement />
                      </div>
                    </div>

                    <div className="flex flex-col text-chat-quotation font-semibold  items-center px-4">
                      <h5>John Doe</h5>
                      <div>#01234567PP</div>
                    </div>

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
                          setMessages={setMessages}
                          messages={messages}
                          currentChat={currentChat}
                          socket={socket}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                let id = ctx.user.id !== c.senderId ? c.senderId : c.receiverId;

                onlineUsers.map((el) => {
                  if (el.userId === id) {
                    return (online = true);
                  } else {
                    return;
                  }
                });

                return (
                  <div key={index} onClick={() => setCurrentChat(c)}>
                    <Conversation
                      online={online}
                      conversation={c}
                      currentUser={ctx.user}
                      updatedAt={c.updatedAt}
                    />
                  </div>
                );
              })}
            </div>

            {/* ============================================ Chat Center  ===================================================== */}
            {/* {console.log(messages)} */}
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
                      if (p) {
                        return (
                          <div key={index} className="" ref={scrollRef}>
                            <SendImage
                              array={messages}
                              loading={loading}
                              message={m}
                              own={m.sender === ctx.user.id}
                              currentUser={ctx.user}
                              ProfilePic={ProfilePic}
                            />
                          </div>
                        );
                      } else if (i) {
                        return (
                          <div key={index} className="" ref={scrollRef}>
                            <Confirmation
                              array={messages}
                              message={m}
                              own={m.sender === ctx.user.id}
                              currentUser={ctx.user}
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
                              own={m.sender === ctx.user.id}
                              currentUser={ctx.user}
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
                    <Quotation ProfilePic={ProfilePic} />
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
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s
              </div>

              {/* --------------- steps work -------------- */}
              <div className="flex flex-col gap-4">
                <div>
                  <div className="text-base font-bold text-chat">
                    ORDER CREATED
                  </div>
                  <div className=" text-sm ">8 July 2022 start diccuss </div>
                </div>
                <div>
                  <div className="text-base text-chat-quotation  font-bold">
                    PAID
                  </div>
                  <div className=" text-sm text-chat-quotation ">
                    10 July 2022{' '}
                  </div>
                </div>
                <div>
                  <div className="text-base text-chat-quotation  font-bold">
                    IN PROCESS
                  </div>
                  {/* <div className=" text-sm ">8 July 2022 start diccuss </div> */}
                </div>
                <div>
                  <div className="text-base text-chat-quotation  font-bold">
                    REVIEW
                  </div>
                  {/* <div className=" text-sm ">8 July 2022 start diccuss </div> */}
                </div>
                <div>
                  <div className="text-base text-chat-quotation  font-bold">
                    COMPLETE
                  </div>
                  {/* <div className=" text-sm ">8 July 2022 start diccuss </div> */}
                </div>
              </div>

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
