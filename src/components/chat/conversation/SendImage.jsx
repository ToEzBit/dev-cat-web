import React, { useEffect, useState } from 'react';
import axios from '../../../config/axios';
import { useAuth } from '../../../contexts/AuthContext';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

function SendImage({ ProfilePic, own, message, array }) {
  const [user, setUser] = useState(null);
  const ctx = useAuth();
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo('en-US');

  useEffect(() => {
    const friendId = array.filter((e) => {
      return e.sender !== ctx.clientChat.id;
    });

    const getUser = async () => {
      try {
        if (friendId.sender % 2 == 0) {
          const res = await axios.get('/user/' + friendId.sender);
          setUser(res.data.user);
          // setClientChat(res?.data?.user);
        } else {
          const resDev = await axios.get('/dev/' + friendId[0].sender);
          setUser(resDev.data.dev);
          console.log(user);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [array, ctx.clientChat.id]);

  return (
    <div>
      {' '}
      {own ? (
        <div className="w-full flex justify-end">
          <div className="flex p-4 items-center gap-4">
            <div className="flex flex-col gap-2">
              <div className="border p-4  shadow-md shadow-bg-home-content bg-chat text-white rounded-lg  border-stroke">
                {console.log(timeAgo.format(new Date()))}
                <img src={message.message} alt="" />
              </div>
              <div className="text-xs text-slate-400 flex justify-end">
                {/* {message.createdAt} */}
                {timeAgo.format(new Date(message?.createdAt))}
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
                <img src={message.message} alt="" />
              </div>
              <div className="text-xs text-slate-400">
                {timeAgo.format(new Date(message?.createdAt))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SendImage;
