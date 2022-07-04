import axios from '../../config/axios';
import React, { useEffect } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

function Message({ ProfilePic, own, message, array }) {
  const [user, setUser] = useState(null);

  const ctx = useAuth();

  useEffect(() => {
    const friendId = array.filter((e) => {
      return e.sender !== ctx.user.id;
    });

    const getUser = async () => {
      try {
        const res = await axios('/user/' + friendId[0].sender);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [array, ctx.user.id]);

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
                {message.createdAt}
              </div>
            </div>
            <div className="avatar ">
              <div className="w-14 rounded-full ">
                <img src={ctx.user.profileImage || ProfilePic} alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full ">
          <div className="flex p-4 items-center gap-4">
            <div className="avatar ">
              <div className="w-14 rounded-full ">
                <img src={user?.user?.profileImage || ProfilePic} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="border p-4 shadow-md shadow-bg-home-content text-chat rounded-lg  border-stroke">
                {message.message}
              </div>
              <div className="text-xs text-slate-400">{message.createdAt}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
