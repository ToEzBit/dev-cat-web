import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ProfilePic from '../../../asset/image/ProfilePic.png';

function Conversation({ conversation, currentUser, updatedAt, online }) {
  const [user, setUser] = useState(null);
  const [read, setRead] = useState(false);

  // console.log(online.socketId);
  console.log(conversation);

  useEffect(() => {
    const friendId =
      conversation.senderId == currentUser.id
        ? conversation.receiverId
        : conversation.senderId;
    // console.log(friendId);
    const getUser = async () => {
      try {
        const res = await axios('/user/' + friendId);
        setUser(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  useEffect(() => {
    conversation.Chats.map((e) => {
      if (e.read === false) {
        if (e.sender !== currentUser.id) {
          setRead(true);
        }
      } else {
        return;
      }
    });
  });

  //   console.log(user.user);

  return (
    <div className="flex flex-col justify-center items-center px-8 py-2">
      <div className="w-full relative border hover:opacity-70 rounded-lg p-4 shadow-lg  active:opacity-50 active:shadow-lg cursor-pointer  duration-300  shadow-bg-home-content flex items-center gap-4">
        <div className="avatar ">
          <div className="w-12 rounded-full ">
            <img src={user?.user?.profileImage || ProfilePic} alt="" />
          </div>
        </div>
        <div>
          <div className="text-base font-semibold">{user?.user?.username}</div>
          <div className=" text-sm ">pls give me more details</div>
        </div>
        {/* <div>
          <div className="text-xs ">{updatedAt}</div>
        </div> */}
        {online ? (
          <div className="absolute border-white rounded-full w-4 h-4 bg-emerald-500 right-0 m-1 top-0"></div>
        ) : (
          <div className="absolute border-white rounded-full w-4 h-4 bg-red-500 right-0 m-1 top-0"></div>
        )}
        {/* {read ? <div>UNREAD</div> : <div>READ</div>} */}
      </div>
    </div>
  );
}

export default Conversation;
