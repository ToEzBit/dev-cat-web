import React from 'react';
import { format } from 'timeago.js';
import { useAuth } from '../../contexts/AuthContext';

function Message({ ProfilePic, own, message }) {
  const ctx = useAuth();
  return (
    <div>
      {' '}
      {own ? (
        <div className="w-full flex justify-end">
          <div className="flex p-4 items-center gap-4">
            <div className="flex flex-col gap-2">
              <div className="border p-4 shadow-md shadow-bg-home-content bg-chat text-white rounded-lg  border-stroke">
                {message.message}
              </div>
              <div className="text-xs text-slate-400 flex justify-end">
                {format(message.createdAt)}
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
                <img src={ctx.user.profileImage || ProfilePic} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="border p-4 shadow-md shadow-bg-home-content text-chat rounded-lg  border-stroke">
                {message.message}
              </div>
              <div className="text-xs text-slate-400">
                {format(message.createdAt)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
