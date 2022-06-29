import React, { useState, useEffect } from 'react';
import Chat from './Chat';
import Login from './Login';
import profile from '../../asset/image/ProfilePic.png';
import { useCallback } from 'react';

import socket from '../../api/socket';
import Navbar from '../../components/navbars/Navbar';
import { useAuth } from '../../contexts/AuthContext';

function Main() {
  const { user } = useAuth();
  const [newUser, setNewUser] = useState('');
  const [user1, setUser1] = useState({});
  const [message, setMessage] = useState('');

  // new state
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [userTyping, setUserTyping] = useState('');

  const checkIfUserExists = useCallback(() => {
    const sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      socket.auth = { sessionId: sessionId };
      socket.connect();
    }
  }, [socket]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected'); // true
    });

    socket.on('disconnect', () => {
      console.log('disconnected'); // false
    });

    // socket.auth = { username: user };

    checkIfUserExists();
    //all connected users
    socket.on('users', (users) => {
      console.log(users); // (2) [{…}, {…}]
      setUsers(users);
    });

    //all users events
    socket.on('session', ({ sessionId, userId, username }) => {
      socket.auth = { sessionId: sessionId };
      localStorage.setItem('sessionId', sessionId);
      setUser1({ sessionId, userId: user.id, username: user.username });
    });

    console.log(user1);

    //new user event
    socket.on('user connected', ({ userId, username, roomId }) => {
      const newMessage = { type: 'userStatus', userId, username, roomId };
      setUsers([...users, newMessage]);
    });
    console.log(users);

    //new message event
    socket.on('new message', ({ userId, username, message }) => {
      const newMessage = {
        type: 'message',
        userId: userId,
        username: username,
        message,
      };
      setMessages([...messages, newMessage]);
    });

    // typing

    // let info = document.querySelector(".info");

    socket.on('typing', ({ username }) => {
      const user = {
        username: username,
      };
      setUserTyping(user);
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
      }, 5000);
      // info.textContent = data.username + " is typing...";
    });

    // console.log({ user });
  }, [socket, messages]);

  //   const logNewUser = () => {
  //     setUser(newUser);
  //     socket.auth = { username: newUser };
  //     // console.log(socket.auth);
  //     socket.connect();
  //   };
  const logOut = () => {
    setUsers('');
    localStorage.clear();
    socket.disconnect();
  };

  const sendMessage = () => {
    socket.emit('new message', message);
    const newMessage = {
      type: 'message',
      userId: user.userId,
      username: user.username,
      message,
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-4">
        {' '}
        {user?.id && (
          <Chat
            user={user}
            profile={profile}
            // message={message}
            messages={messages}
            sendMessage={sendMessage}
            setMessages={setMessages}
            typing={typing}
            socket={socket}
            userTyping={userTyping}
            users={users}
            setUsers={setUsers}
            logOut={logOut}
          />
        )}
        {/* {console.log(socket)} */}
        {/* {!user.userId && (
          <Login
            newUser={newUser}
            setNewUser={setNewUser}
            logNewUser={logNewUser}
          />
        )} */}
      </div>
    </>
  );
}

export default Main;
