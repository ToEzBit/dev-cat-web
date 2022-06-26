import React from 'react';

function SpecialRequirement() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col   text-Gray-900 text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg border border-purple-300">
        <div className="flex flex-col py-5">
          <label>John Doe</label>
          <label>#01234567PP</label>
        </div>
        {/* ==============================================================detailUser=============================================================== */}
        <div className="flex flex-col ...">
          <div className="flex justify-start">
            <label
              className="block text-purple-700 text-sm font-bold mb-2"
              forhtml="Title"
            >
              Title
            </label>
          </div>
          <input
            className="flex   p-2 my-1 w-full text-purple-900 text-center rounded-lg border border-purple-300 sm:text-xs "
            id="username"
            type="text"
            placeholder="Input Title"
          />
          <div className="flex justify-start">
            <label
              className="block text-purple-700 text-sm font-bold mb-2"
              forhtml="Description"
            >
              Description
            </label>
          </div>
          <input
            className="block p-2 my-1 w-full text-purple-900 text-center rounded-lg border border-purple-300 sm:text-xs "
            id="username"
            type="text"
            placeholder="Input Description"
          />
          <div className="flex justify-start">
            <label
              className="block text-purple-700 text-sm font-bold mb-2"
              forhtml="Price"
            >
              Price
            </label>
          </div>
          <input
            className="block p-2 my-1 w-full text-purple-900 text-center rounded-lg border border-purple-300 sm:text-xs "
            id="username"
            type="text"
            placeholder="Input price"
          />
          <div className="flex justify-start">
            <label
              className="block text-purple-700 text-sm font-bold mb-2"
              forhtml="Duration"
            >
              Duration
            </label>
          </div>
          <input
            className="block p-2 my-1 w-full text-purple-900 text-center rounded-lg border border-purple-300 sm:text-xs "
            id="username"
            type="text"
            placeholder="Input work duration"
          />
          <div className="flex justify-start">
            <label
              className="block text-purple-700 text-sm font-bold mb-2"
              forhtml="thumbnailImage"
            >
              Comment
            </label>
          </div>
          <input
            className="block p-2 mt-1 mb-3 w-full text-purple-900 text-center  rounded-lg border border-purple-300 sm:text-xs "
            id="username"
            type="text"
            placeholder="Write comment"
          />
          {/* ==================================================================input detail============================================================= */}

          <div className="flex  justify-center rounded-lg ">
            <button className="bg-white hover:bg-purple-100 text-purple-800 font-semibold py-2 px-4 border border-purple-400 rounded shadow">
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
