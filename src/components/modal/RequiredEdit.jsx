import axios from '../../config/axios';
import React from 'react';
import { useState } from 'react';

function RequiredEdit({ getOrderId, setFetchOrder }) {
  const [comment, setComment] = useState('');

  const handleStartWork = async () => {
    const message = {
      reviewDetail: comment,
    };
    await axios.post(`/orders/${getOrderId}/review/`, message);
    setFetchOrder((prev) => !prev);
  };

  return (
    <div className="pb-4 pt-2">
      <label htmlFor="Required-modal" className=" text-chat-quotation">
        X
      </label>

      <div className="text-center flex flex-col gap-4">
        <h4 className=" text-chat">Comment your Needed Revision</h4>
        <textarea
          type="text"
          placeholder="comments..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className="border rounded-lg m-4 p-4"
        />
        <div className=" flex justify-center gap-8">
          <label
            htmlFor="Required-modal"
            className="border cursor-pointer border-stroke p-2 rounded-xl px-4 hover:bg-chat  hover:text-white duration-300  text-chat"
            onClick={handleStartWork}
          >
            Confirm your Requirement
          </label>
          <label
            htmlFor="Required-modal"
            className="border border-stroke p-2 rounded-xl px-4  hover:bg-chat  hover:text-white duration-300  text-chat"
          >
            No need to edit...
          </label>
        </div>
      </div>
    </div>
  );
}

export default RequiredEdit;
