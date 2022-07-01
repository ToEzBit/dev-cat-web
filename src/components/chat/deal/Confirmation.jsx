import React from 'react';

function Confirmation() {
  return (
    <div>
      <div className="w-full ">
        <div className="flex p-8 justify-center items-baseline gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-8 border p-8 shadow-md shadow-bg-home-content text-chat rounded-lg  border-stroke">
              <div className="flex flex-col text-chat-quotation font-semibold  items-center px-4">
                <h5>John Doe</h5>
                <div>#01234567PP</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-chat underline font-bold">VIEW WORKS</div>
                <div className="text-chat-quotation text-[8px]">
                  click this link to view your work
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 ">
                <button className="border p-2 rounded-lg border-bg-home-content">
                  Agree
                </button>
                <button className="border p-2 px-4 rounded-lg border-bg-home-content">
                  Required Edit
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

export default Confirmation;
