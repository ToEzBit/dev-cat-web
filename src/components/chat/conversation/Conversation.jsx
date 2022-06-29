import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ProfilePic from '../../../asset/image/ProfilePic.png';
import { format } from 'timeago.js';

function Conversation({ conversation, currentUser, updatedAt }) {
  const [user, setUser] = useState(null);

  //   console.log(currentUser.id);
  //   console.log(conversation.receiverId);

  useEffect(() => {
    const friendId =
      conversation.senderId == currentUser.id
        ? conversation.receiverId
        : conversation.senderId;
    console.log(friendId);
    const getUser = async () => {
      try {
        const res = await axios('/user/' + friendId);
        setUser(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  //   console.log(user.user);

  return (
    <div className="flex flex-col justify-center items-center px-8 py-2">
      <div className="w-full border rounded-lg p-4 shadow-lg shadow-bg-home-content flex items-center gap-4">
        <div className="avatar ">
          <div className="w-12 rounded-full ">
            <img src={user?.user.profileImage || ProfilePic} alt="" />
          </div>
        </div>
        <div>
          <div className="text-base font-semibold">{user?.user.username}</div>
          <div className=" text-sm ">pls give me more details</div>
        </div>
        <div>
          <div className="text-xs ">{format(updatedAt)}</div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
