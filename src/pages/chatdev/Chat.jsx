import React, { useEffect, useRef, useState } from 'react';
import ChatContainer from './ChatContainer';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import { useCallback } from 'react';

function Chat({
  profile,
  user,
  messages,
  setMessages,
  userText,
  typing,
  socket,
  users,
  setUsers,
  logOut,
}) {
  const [selectedUser, setSelectedUser] = useState({});
  const [message, setMessage] = useState('');

  const currentSelectedUser = useRef({});

  const findUser = useCallback(
    (userId) => {
      const userIndex = users.findIndex((u) => u.userId === userId);
      return userIndex >= 0;
    },
    [users],
  );

  const handleConnectionStatus = useCallback(
    (userId, status) => {
      const userIndex = users.findIndex((u) => u.userId === userId);
      if (userIndex >= 0) {
        users[userIndex].connected = status;
        setUsers([...users]);
      }
    },
    [users, setUsers],
  );

  const userConnected = useCallback(
    ({ userId, username }) => {
      if (user.userId !== userId) {
        const userExists = findUser(userId);
        if (userExists) {
          handleConnectionStatus(userId, true);
        } else {
          const newUser = { userId, username, connected: true };
          setUsers([...users, newUser]);
        }
      }
    },
    [user, users, setUsers, findUser, handleConnectionStatus],
  );

  const userDisconnected = useCallback(
    ({ userId }) => handleConnectionStatus(userId, false),
    [handleConnectionStatus],
  );

  const handleNewMessageStatus = useCallback(
    (userId, status) => {
      const userIndex = users.findIndex((u) => u.userId === userId);
      if (userIndex >= 0) {
        users[userIndex].hasNewMessage = status;
        setUsers([...users]);
      }
    },
    [users, setUsers],
  );

  const privateMessage = useCallback(
    ({ content, from, to }) => {
      //if user is selected
      if (currentSelectedUser.current.userId) {
        if (currentSelectedUser.current.userId === from) {
          const newMessage = {
            userId: from,
            message: content,
          };
          setMessages([...messages, newMessage]);
        } else {
          handleNewMessageStatus(from, true);
        }
      } else {
        //if user is not selected
        handleNewMessageStatus(from, true);
      }
      //if user is not selected
    },
    [messages, setMessages, selectedUser, handleNewMessageStatus],
  );

  const userMessages = useCallback(
    ({ messages }) => {
      const chatMessages = [];
      messages.forEach(({ content, from }) => {
        chatMessages.push({ userId: from, message: content });
        setMessages([...chatMessages]);
      });
    },
    [setMessages],
  );

  useEffect(() => {
    socket.on('user connected', (user) => userConnected(user));

    socket.on('user disconnected', (user) => userDisconnected(user));

    //new message event
    socket.on('private message', (message) => privateMessage(message));

    socket.on('user messages', (messages) => userMessages(messages));
  }, [socket, userConnected, privateMessage, userMessages, userDisconnected]);

  const sendMessage = () => {
    socket.emit('private message', {
      content: message,
      to: selectedUser.userId,
    });
    const newMessage = {
      type: 'message',
      userId: user.userId,
      username: user.username,
      message,
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const selectUser = (user) => {
    setSelectedUser(user);

    setMessages([]);

    currentSelectedUser.current = user;

    socket.emit('user messages', user);

    handleNewMessageStatus(user.userId, false);
  };
  return (
    <ChatContainer>
      <div className=" bg-red-500 p-2 text-center text-white" onClick={logOut}>
        Logout
      </div>
      <div className="grid grid-cols-4 chat-window">
        <div className="w-full flex flex-col chat-window  border-r">
          <div className="border-b p-4 px-8  flex items-center gap-4">
            <img src={profile} className="w-12" />
            <strong className="">{user.username}</strong>
            {/* <strong className="">
                            Logged in as {user.username}
                        </strong> */}
          </div>
          <div className=" flex justify-center  m-2 text-white shadow-md  bg-indigo-500 rounded-lg ">
            Connected Users
          </div>
          {/* {console.log(users)} */}
          {users.length > 0 ? (
            users.map((e, index) => {
              if (e.username === user.username) return null;
              return (
                <div
                  key={index}
                  className="hover:cursor-pointer"
                  onClick={() => selectUser(e)}
                >
                  <div className="border-b p-4 px-8  flex items-center gap-4 ">
                    <div className="relative">
                      <img src={profile} alt={e.username} className="w-12" />
                      {console.log(e.connected)}
                      <span
                        className={e.connected ? 'online' : 'offline'}
                      ></span>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <strong className="">{e.username}</strong>
                      <span
                        className={e.hasNewMessage ? 'new-message-alert' : ''}
                        // className="new-message-alert"
                      ></span>
                    </div>
                    {/* <strong className="">Logged in as {user}</strong> */}
                  </div>
                </div>
              );
            })
          ) : (
            <div className=" flex h-full justify-center  flex-col items-center chat-window">
              No Users Connected
            </div>
          )}
        </div>
        {/* {console.log(selectedUser.userId)} */}
        {selectedUser.userId && (
          <div className="w-full relative h-full flex flex-col col-span-3 chat-window">
            <ChatHeader profile={profile} user={selectedUser} />

            <div className=" flex flex-col items-center gap-2 mt-2 ">
              {messages.map((message, index) => {
                return message.type === 'userStatus' ? (
                  <div
                    className="p-1 text-xs rounded-lg bg-emerald-300 px-2 text-white shadow-md"
                    key={index}
                  >
                    <span>
                      {message.userId === user.userId
                        ? 'You have Joined!'
                        : `${message.username} has Joined!`}
                    </span>
                  </div>
                ) : (
                  <div
                    key={index}
                    className={
                      message.userId === user.userId
                        ? ' ml-auto  p-4'
                        : ' mr-auto  p-4'
                    }
                  >
                    <div
                      className={
                        message.userId === user.userId
                          ? ' flex gap-4 items-center flex-row-reverse'
                          : ' flex gap-4 items-center '
                      }
                    >
                      <div className=" ">
                        {/* <div>
                                        {" "}
                                        {user.username === user.userId
                                            ? "You"
                                            : user.username}
                                    </div> */}
                        {/* <img
                                                        src={profile}
                                                        className="rounded-full w-12"
                                                        alt={message.username}
                                                        title={message.username}
                                                    /> */}
                      </div>
                      <div className="flex flex-col">
                        {/* <div className=" font-bold">
                                                        {message.userId ===
                                                        user.userId
                                                            ? "You"
                                                            : message.username}
                                                    </div> */}
                        {message.message}
                        <div className=" text-xs">12:00 AM</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="info mx-auto p-4" id="ontyping"></div>
            {typing ? <div className="info mx-auto p-4">{}tying...</div> : ''}
            {console.log(typing)}

            <ChatInput
              userText={userText}
              sendMessage={sendMessage}
              setMessage={setMessage}
              message={message}
              socket={socket}
            />
          </div>
        )}
      </div>
    </ChatContainer>
  );
}

export default Chat;
