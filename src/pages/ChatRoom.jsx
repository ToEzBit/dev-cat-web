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

function ChatRoom() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  //socket io
  const socket = useRef();
  //inputChat
  const [newMessages, setNewMessages] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const scrollRef = useRef();
  //Online user
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // const arrayConversations = [];
  // arrayConversations.push(conversations);

  const ctx = useAuth();
  // console.log(ctx.user);

  useEffect(() => {
    socket.current = io('ws://localhost:8900');
    socket.current.on('getMessage', (data) => {
      // console.log(data);
      setArrivalMessage({
        sender: data.senderId,
        message: data.message,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    console.log(currentChat?.senderId);
    arrivalMessage &&
      currentChat?.senderId &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  // console.log(messages);
  console.log(arrivalMessage);
  useEffect(() => {
    socket.current.emit('addUser', ctx?.user?.id);
    socket.current.on('getUsers', (users) => {
      setOnlineUsers(users);
    });
  }, [ctx?.user]);

  console.log(onlineUsers);

  useEffect(() => {
    setLoading(true);
    const getConversations = async () => {
      try {
        const res = await axios.get('/conversations/' + ctx.user.id);
        const arrayConversations = [...conversations, ...res.data];
        setConversations(arrayConversations);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
    setLoading(false);
  }, [ctx?.user?.id]);

  const arrayConandOnline = [...conversations, ...onlineUsers];
  console.log(arrayConandOnline);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get('/messages/' + currentChat.id);
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

    // let receiverId;
    // if (currentChat.receiverId === ctx.user.id) {
    //   receiverId = currentChat.senderId;
    // } else {
    //   receiverId = currentChat.receiverId;
    // }
    // console.log(ctx.user.id);
    // console.log(receiverId);
    // console.log(currentChat?.senderId);

    // console.log(currentChat.Chats);
    const receiverId =
      currentChat.senderId == ctx.user.id
        ? currentChat.receiverId
        : currentChat.senderId;
    // console.log(currentChat);

    // console.log(receiverId);
    socket.current.emit('sendMessage', {
      senderId: ctx?.user.id,
      receiverId,
      message: newMessages,
    });
    // console.log(receiverId);

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
        >
          <Navbar />
          {/* ============================================ Nav Chat  ===================================================== */}
          <div className="grid grid-cols-4 border items-baseline ">
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
                    {' '}
                    Sort{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-span-2 border-x">
              <div className="px-8 py-6 ">
                <div className="grid grid-cols-3 justify-center gap-4 w-full items-center">
                  <button className="border px-4 rounded-lg text-chat border-stroke shadow-md shadow-bg-home-content">
                    Special Requirement
                  </button>
                  <div className="flex flex-col text-chat-quotation font-semibold  items-center px-4">
                    <h5>John Doe</h5>
                    <div>#01234567PP</div>
                  </div>
                  <button className="border px-4 rounded-lg text-chat border-stroke shadow-md shadow-bg-home-content">
                    SUBMIT
                  </button>
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
          <div className="grid grid-cols-4 relative chat-window ">
            {/* ============================================ Chat left  ===================================================== */}

            <div className="  col-span-1 flex flex-col  overflow-auto pt-4  h-[1080px]">
              {/* --------------- History Chat -------------- */}
              {conversations.map((c, index) => (
                <div key={index} onClick={() => setCurrentChat(c)}>
                  <Conversation
                    conversation={c}
                    currentUser={ctx.user}
                    updatedAt={c.updatedAt}
                  />
                </div>
              ))}
            </div>

            {/* ============================================ Chat Center  ===================================================== */}
            <div className="border-x col-span-2 relative h-[980px] ">
              {currentChat ? (
                <>
                  {/* --------------- header center Chat -------------- */}

                  {/* --------------- dev center Chat -------------- */}
                  <div className="px-12 py-8 flex flex-col gap-8 overflow-auto h-[980px] ">
                    <div>
                      {messages?.map((m, index) => (
                        <div ref={scrollRef}>
                          <Message
                            key={index}
                            ProfilePic={ProfilePic}
                            message={m}
                            own={m.sender === ctx.user.id}
                            currentUser={ctx.user}
                          />
                        </div>
                      ))}
                      {/* --------------- dev Quotation Chat -------------- */}
                      <Quotation ProfilePic={ProfilePic} />
                      {/* --------------- dev Confirm Chat -------------- */}
                      <Confirmation />
                    </div>
                    {/* --------------- input Chat center -------------- */}
                  </div>
                  <InputChat
                    newMessages={newMessages}
                    setNewMessages={setNewMessages}
                    handleSubmit={handleSubmit}
                  />
                </>
              ) : (
                <span className=" top-40 text-6xl text-center px-8 opacity-20  absolute ">
                  {' '}
                  Open a conversation to start a chat
                </span>
              )}
            </div>
            {/* ============================================ Chat Right  ===================================================== */}
            <div className="  col-span-1 ">
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
              <div className="flex flex-col gap-8 justify-center items-center p-8">
                <div className="w-full border rounded-lg p-4 shadow-lg shadow-bg-home-content flex items-baseline">
                  <div className="text-base p-4">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </div>
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
                <div className="w-full ">
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
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default ChatRoom;
