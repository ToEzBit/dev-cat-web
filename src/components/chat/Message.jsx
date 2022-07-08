import axios from '../../config/axios';
import React, { useEffect } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

function Message({ ProfilePic, own, message, array }) {
  const [user, setUser] = useState(null);

  const ctx = useAuth();
  const timeAgo = new TimeAgo();

  useEffect(() => {
    const friendId = array.find((e) => {
      return e.sender !== ctx.clientChat.id;
    });
    // console.log(friendId.sender);

    const getUser = async () => {
      try {
        if (friendId?.sender % 2 == 0) {
          // console.log('check user');
          const res = await axios.get('/user/' + friendId?.sender);
          setUser(res?.data?.user);
          // setClientChat(res?.data?.user);
        } else {
          const resDev = await axios.get('/dev/' + friendId?.sender);
          // console.log('check dev');
          // console.log(resDev);
          setUser(resDev?.data?.dev);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [array, ctx.clientChat.id]);

  return (
    <div className=" ">
      {' '}
      {own ? (
        <div className="w-full flex justify-end">
          <div className="flex p-4 items-center gap-4">
            <div className="flex flex-col gap-2">
              <div className="border p-4 shadow-md shadow-bg-home-content bg-chat text-white rounded-lg  border-stroke">
                {message.message}
              </div>
              <div className="text-xs text-slate-400 flex justify-end">
                {timeAgo.format(new Date(message.createdAt))}
              </div>
            </div>
            <div className="avatar ">
              <div className="w-14 rounded-full ">
                <img src={ctx.clientChat.profileImage || ProfilePic} alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full ">
          <div className="flex p-4 items-center gap-4">
            <div className="avatar ">
              <div className="w-14 rounded-full ">
                <img src={user?.profileImage || ProfilePic} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="border p-4 shadow-md shadow-bg-home-content text-chat rounded-lg  border-stroke">
                {message.message}
              </div>
              <div className="text-xs text-slate-400">
                {timeAgo.format(new Date(message.createdAt))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
