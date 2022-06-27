import React from 'react';

function SpecialRequirement() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col   text-[#06033A] text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg border border-[#7879F1]">
        <div className="flex flex-col py-5">
          <label>John Doe</label>
          <label>#01234567PP</label>
        </div>
        {/* ==============================================================detailUser=============================================================== */}
        <div className="flex flex-col ...">
          <div className="flex justify-start">
            <label
              className="block text-[#7879F1] text-sm font-bold mb-2"
              forhtml="Title"
            >
              Title
            </label>
          </div>
          <input
            className="flex   p-2 my-1 w-full text-[#706D9E] text-center rounded-lg border border-[#E8E7FF] sm:text-xs "
            id="username"
            type="text"
            placeholder="Input Title"
          />
          <div className="flex justify-start">
            <label
              className="block text-[#7879F1] text-sm font-bold mb-2"
              forhtml="Description"
            >
              Description
            </label>
          </div>
          <input
            className="block p-2 my-1 w-full text-[#706D9E] text-center rounded-lg border border-[#E8E7FF] sm:text-xs "
            id="username"
            type="text"
            placeholder="Input Description"
          />
          <div className="flex justify-start">
            <label
              className="block text-[#7879F1] text-sm font-bold mb-2"
              forhtml="Price"
            >
              Price
            </label>
          </div>
          <input
            className="block p-2 my-1 w-full text-[#706D9E] text-center rounded-lg border border-[#E8E7FF] sm:text-xs "
            id="username"
            type="text"
            placeholder="Input price"
          />
          <div className="flex justify-start">
            <label
              className="block text-[#7879F1] text-sm font-bold mb-2"
              forhtml="Duration"
            >
              Duration
            </label>
          </div>
          <input
            className="block p-2 my-1 w-full text-[#706D9E] text-center rounded-lg border border-[#E8E7FF] sm:text-xs "
            id="username"
            type="text"
            placeholder="Input work duration"
          />
          <div className="flex justify-start">
            <label
              className="block text-[#7879F1] text-sm font-bold mb-2"
              forhtml="thumbnailImage"
            >
              Comment
            </label>
          </div>
          <textarea
            id="message"
            rows="4"
            className="block p-7 mt-1 mb-3 w-full text-[#706D9E] text-center  rounded-lg border border-[#E8E7FF] sm:text-xs  "
            placeholder="Write comment"
          />
          {/* ==================================================================input detail============================================================= */}

          <div className="flex  justify-center rounded-lg ">
            <button className="bg-white hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold py-2 px-4 border border-[#E8E7FF] rounded-xl shadow">
              Submit
            </button>
          </div>
          {/* ==================================================================button================================================================ */}
        </div>
      </div>
    </div>
  );
}

export default SpecialRequirement;
