import axios from '../../config/axios';
import React from 'react';

function StartWork({ currentChat }) {
  if (currentChat) {
    var allOrderId = currentChat?.Chats?.filter((e) => {
      let arrayOrderId = e?.message?.startsWith('order: ');
      return arrayOrderId;
    });
    var getLastOrderId = allOrderId[0]?.message?.replace('order: ', '');
    // console.log(allOrderId);
  } else {
    console.log('waiting');
  }

  const handleStartWork = async () => {
    const message = {
      status: 'Inprogress',
    };
    await axios.patch(`/orders/${getLastOrderId}/status/`, message);
  };
  return (
    <div className="pb-4 pt-2">
      <label htmlFor="save-modal" className=" text-chat-quotation">
        X
      </label>

      <div className="text-center flex flex-col gap-8">
        <h4 className=" text-chat">Confirm to start your processing work!</h4>
        <div className=" flex justify-center gap-8">
          <label
            htmlFor="save-modal"
            className="border cursor-pointer border-stroke p-2 rounded-xl px-4 hover:bg-chat  hover:text-white duration-300  text-chat"
            onClick={handleStartWork}
          >
            Yes I'm Ready!
          </label>
          <label
            htmlFor="save-modal"
            className="border border-stroke p-2 rounded-xl px-4  hover:bg-chat  hover:text-white duration-300  text-chat"
          >
            No I'm not...
          </label>
        </div>
      </div>
    </div>
  );
}

export default StartWork;
