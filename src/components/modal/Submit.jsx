import React from 'react';

function Submit() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col   text-purple-700 text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg border border-purple-300">
        <div className="flex flex-col py-5">
          <label>John Doe</label>
          <label>#01234567PP</label>
        </div>
        {/* ==============================================================detailUser=============================================================== */}
        <div>
          <div className="flex flex-col ...">
            <div className="flex justify-start">
              <label
                className="block text-purple-700 text-sm font-bold mb-2"
                forhtml="Link"
              >
                Link
              </label>
            </div>
            <input
              className="flex   p-2 my-1 w-full text-purple-900 text-center rounded-lg border border-purple-300 sm:text-xs "
              id="username"
              type="text"
              placeholder="Input your Link"
            />
            <div className="flex justify-start">
              <label
                className="block text-purple-700 text-sm font-bold mb-2"
                forhtml="Comment"
              >
                Comment
              </label>
            </div>
            <input
              className="block p-2 my-1 w-full text-purple-900 text-center rounded-lg border border-purple-300 sm:text-xs "
              id="username"
              type="text"
              placeholder="Write your comment"
            />
          </div>
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

export default Submit;
