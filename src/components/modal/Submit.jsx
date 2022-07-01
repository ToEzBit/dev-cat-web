import React from 'react';
import axios from '../../config/axios';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

function Submit({
  setMessages,
  messages,
  currentChat,
  newMessages,
  socket,
  setNewMessages,
}) {
  const [link, setLink] = useState('');
  const [comment, setComment] = useState('');

  const ctx = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: ctx.user.id,
      message: link,
      conversationId: currentChat.id,
    };

    const receiverId =
      currentChat.senderId == ctx.user.id
        ? currentChat.receiverId
        : currentChat.senderId;

    socket.current.emit('sendMessage', {
      senderId: ctx?.user.id,
      receiverId,
      message: link,
    });

    try {
      const res = await axios.post('/messages', message);
      setMessages([...messages, res.data]);
      setNewMessages('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex justify-end ">
        <div className="modal-action">
          <label htmlFor="submit-modal">X</label>
        </div>
      </div>
      <div className="flex flex-col   text-[#06033A] text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg border border-[#7879F1]">
        <div className="flex flex-col py-5">
          <label>John Doe</label>
          <label>#01234567PP</label>
        </div>
        {/* ==============================================================detailUser=============================================================== */}
        <div>
          <div className="flex flex-col ...">
            <div className="flex justify-start">
              <label
                className="block text-[#7879F1] text-sm font-bold mb-2"
                htmlFor="Link"
              >
                Link
              </label>
            </div>
            <input
              className="flex   p-2 my-1 w-full text-[#706D9E] text-center rounded-lg border border-[#E8E7FF] sm:text-xs "
              id="username"
              type="text"
              value={link}
              placeholder="Input your Link"
              onChange={(e) => setLink(e.target.value)}
            />
            <div className="flex justify-start">
              <label
                className="block text-[#7879F1] text-sm font-bold mb-2"
                htmlFor="Comment"
              >
                Comment
              </label>
            </div>
            <textarea
              id="message"
              rows="4"
              className="block p-7 mt-1 mb-3 w-full text-[#706D9E] text-center  rounded-lg border border-[#E8E7FF] sm:text-xs  "
              placeholder="Write comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          {/* ==================================================================input detail============================================================= */}
          <div className="flex  justify-center rounded-lg ">
            <button
              onClick={handleSubmit}
              className="bg-white hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold py-2 px-4 my-4 border border-[#E8E7FF] rounded-xl shadow"
            >
              Submit
            </button>
          </div>
          {/* ==================================================================button================================================================ */}
        </div>
      </div>
    </div>
  );
}

export default Submit;
