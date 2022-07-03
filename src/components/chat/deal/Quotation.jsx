import React, { useState } from 'react';

function Quotation({ ProfilePic }) {
  const [myOrder, setMyOrder] = useState('');
  return (
    <div>
      {' '}
      <div className="w-full ">
        <div className="flex p-4 items-center gap-4">
          <div className="w-12 rounded-full">
            <img src={ProfilePic} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4 border p-4 shadow-md shadow-bg-home-content text-chat rounded-lg  border-stroke">
              <div className="flex justify-between items-baseline px-4">
                <h5>Quotation</h5>
                <div>3,000 BAHT</div>
              </div>
              <div className="text-chat-quotation">
                Quick quiz is the easiest way to make quizzes FREE
              </div>
              <div className="grid grid-cols-2 gap-4 px-4">
                <button className="border p-2 rounded-lg border-bg-home-content">
                  View Detail
                </button>
                <button className="border p-2 rounded-lg border-bg-home-content">
                  Download
                </button>
              </div>
            </div>
            <div className="text-xs text-slate-400">8.00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotation;
