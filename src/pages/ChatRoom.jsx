import React from 'react';
// import Navbar from '../components/navbars/Navbar';

function ChatRoom() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* ============================================ Nav Chat  ===================================================== */}
      <div className="grid grid-cols-4 border items-baseline ">
        <div className="col-span-1">
          <div className="px-8 py-6 ">
            <div className="grid grid-cols-3 justify-center gap-4 w-full items-center">
              <div className="form-control col-span-2 ">
                <input
                  type="text"
                  placeholder="Search"
                  className=" h-8 input   input-bordered   shadow-2xl shadow-bg-home-content"
                />
              </div>
              <button className=" p-1 px-4 text-slate-400 rounded-lg bg-white">
                {' '}
                Sort{' '}
              </button>
            </div>
          </div>
        </div>
        <div className=" col-span-2 border-x">
          <div className="px-8 py-6 ">
            <div className="grid grid-cols-3 justify-center gap-4 w-full items-center">
              <button className="border px-4 rounded-lg text-chat border-stroke shadow-md shadow-bg-home-content">
                Download
              </button>
              <div className="flex flex-col text-chat-quotation font-semibold  items-center px-4">
                <h5>John Doe</h5>
                <div>#01234567PP</div>
              </div>
              <button className="border px-4 rounded-lg text-chat border-stroke shadow-md shadow-bg-home-content">
                Download
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="px-8 py-6  ">
            <div className="grid grid-cols-2 justify-center gap-4 w-full items-center">
              <div className="">
                <div>Order Status</div>
              </div>
              <div className="text-xs font-bold  text-chat rounded-lg text-end bg-white">
                ORDER DETAIL
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 h-screen ">
        {/* ============================================ Chat left  ===================================================== */}
        <div className="  col-span-1 ">
          {/* --------------- History Chat -------------- */}
          <div className="flex flex-col justify-center items-center p-8">
            <div className="w-full border rounded-lg p-4 shadow-lg shadow-bg-home-content flex items-baseline">
              <div>LOGO</div>
              <div>
                <div className="text-base">Developer</div>
                <div className=" text-sm ">pls give me more details</div>
              </div>
              <div>
                <div className="text-xs ">8:00 PM Today</div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================ Chat Center  ===================================================== */}
        <div className="border-x col-span-2">
          {/* --------------- header center Chat -------------- */}

          {/* --------------- dev center Chat -------------- */}
          <div className="px-12 py-8 flex flex-col gap-8">
            <div>
              <div className="w-full ">
                <div className="flex p-4 items-baseline gap-4">
                  <div>LOGO</div>
                  <div className="flex flex-col gap-2">
                    <div className="border p-4 shadow-md shadow-bg-home-content text-chat rounded-lg  border-stroke">
                      Lorem Ipsum has been the industry's standard dummy{' '}
                    </div>
                    <div className="text-xs text-slate-400">8.00 PM</div>
                  </div>
                </div>
              </div>
              {/* --------------- user center Chat -------------- */}
              <div className="w-full flex justify-end">
                <div className="flex p-4 items-baseline gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="border p-4 shadow-md shadow-bg-home-content bg-chat text-white rounded-lg  border-stroke">
                      Lorem Ipsum has been the industry's standard dummy{' '}
                    </div>
                    <div className="text-xs text-slate-400 flex justify-end">
                      8.00 PM
                    </div>
                  </div>
                  <div>LOGO</div>
                </div>
              </div>
              {/* --------------- dev Quotation Chat -------------- */}
              <div className="w-full ">
                <div className="flex p-4 items-baseline gap-4">
                  <div>LOGO</div>
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
              {/* --------------- dev Confirm Chat -------------- */}
              <div className="w-full ">
                <div className="flex p-8 justify-center items-baseline gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-8 border p-8 shadow-md shadow-bg-home-content text-chat rounded-lg  border-stroke">
                      <div className="flex flex-col text-chat-quotation font-semibold  items-center px-4">
                        <h5>John Doe</h5>
                        <div>#01234567PP</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-chat underline font-bold">
                          VIEW WORKS
                        </div>
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
            {/* --------------- input Chat center -------------- */}
            <div className="grid grid-cols-9 input-bordered border rounded-xl p-2 items-center gap-4  shadow-2xl shadow-bg-home-content">
              <div className="form-control col-span-8 ">
                <input
                  type="text"
                  placeholder="Message"
                  className=" h-8 input   "
                />
              </div>
              <div className="flex gap-2">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 stroke-chat"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================ Chat Right  ===================================================== */}
        <div className="  col-span-1 ">
          {/* <div className="px-8 py-6 border-y ">
            <div className="grid grid-cols-2 justify-center gap-4 w-full items-center">
              <div className="">
                <div>Order Status</div>
              </div>
              <div className="text-xs font-bold  text-chat rounded-lg text-end bg-white">
                ORDER DETAIL
              </div>
            </div>
          </div> */}
          {/* --------------- History Chat -------------- */}
          <div className="flex flex-col gap-8 justify-center items-center p-8">
            <div className="w-full border rounded-lg p-4 shadow-lg shadow-bg-home-content flex items-baseline">
              <div className="text-base p-4">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s
              </div>
            </div>
            {/* --------------- steps work -------------- */}
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-base font-bold text-chat">
                  ORDER CREATED
                </div>
                <div className=" text-sm ">8 July 2022 start diccuss </div>
              </div>
              <div>
                <div className="text-base text-chat-quotation  font-bold">
                  PAID
                </div>
                <div className=" text-sm text-chat-quotation ">
                  10 July 2022{' '}
                </div>
              </div>
              <div>
                <div className="text-base text-chat-quotation  font-bold">
                  IN PROCESS
                </div>
                {/* <div className=" text-sm ">8 July 2022 start diccuss </div> */}
              </div>
              <div>
                <div className="text-base text-chat-quotation  font-bold">
                  REVIEW
                </div>
                {/* <div className=" text-sm ">8 July 2022 start diccuss </div> */}
              </div>
              <div>
                <div className="text-base text-chat-quotation  font-bold">
                  COMPLETE
                </div>
                {/* <div className=" text-sm ">8 July 2022 start diccuss </div> */}
              </div>
            </div>
            {/* --------------- Dev profile -------------- */}
            <div className="w-full ">
              <div className="flex p-4 items-center gap-4">
                <div>LOGO</div>
                <div className="flex flex-col gap-2">
                  <div className=" text-chat rounded-lg  border-stroke">
                    John Doe
                  </div>
                  <div className="text-xs text-stroke">
                    Give feedback or Report this profile
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
