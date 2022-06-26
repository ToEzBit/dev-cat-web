import React from 'react';

function CreateProducts() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-end px-5 py-3">
        <button className="bg-transparent hover:bg-purple-400 text-purple-500 font-semibold hover:text-white py-2 px-4 mx-3 border border-purple-500 hover:border-transparent rounded-xl shadow-md ">
          Close
        </button>
        <button className="bg-transparent hover:bg-purple-400 text-purple-500 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-xl shadow-md ">
          Submit
        </button>
      </div>
      <div className="flex flex-col  flex-auto text-purple-700 text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg border border-purple-300">
        <div className="flex  w-full  ">
          <div className="flex flex-col  flex-auto text-purple-700 text-center  px-4 py-2 m-2 gap-3 my-2  w-1/2">
            <div className="">
              <div className="flex justify-start">
                <label
                  className="block text-purple-700 text-sm font-bold mb-2"
                  forhtml="titleProject"
                >
                  Title Project
                </label>
              </div>

              <input
                className="block p-2 my-1 w-full text-purple-900  rounded-lg border border-purple-300 sm:text-xs "
                id="TitleProject"
                type="text"
                placeholder="Input Title Project"
              />
              <input
                className="block p-2 w-full text-purple-900  rounded-lg border border-purple-300 sm:text-xs "
                id="Category"
                type="text"
                placeholder="Input Category"
              />
              <div className="flex flex-col pt-5">
                <div className="flex justify-start">
                  <label
                    className="block text-purple-700 text-sm font-bold mb-2 text-sm"
                    forhtml="Information"
                  >
                    Information
                  </label>
                </div>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-md text-purple-900  rounded-xl border border-purple-300 py-8 "
                  placeholder="Input Information"
                />
              </div>
            </div>
          </div>

          {/* ====================================================================TitleProject =============================================================================*/}
          <div className="w-1/2">
            <div className="flex flex-col  px-4 py-2 m-2 gap-1 my-2   ">
              <div className="flex  w-full ">
                <label
                  className="block text-purple-700 text-sm font-bold mb-2"
                  forhtml="standardImage"
                >
                  standard image
                </label>
              </div>
              <div className="grid grid-cols-4 gap-4  ">
                <a
                  href="#"
                  className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-2 shadow-md hover:bg-purple-100 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-purple-700 "
                >
                  <p className="font-normal text-purple-700 dark:text-purple-400">
                    +
                  </p>
                </a>
                <a
                  href="#"
                  className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-2 shadow-md hover:bg-purple-100 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-purple-700"
                >
                  <p className="font-normal text-purple-700 dark:text-purple-400">
                    +
                  </p>
                </a>
                <a
                  href="#"
                  className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-2 shadow-md hover:bg-purple-100 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-purple-700"
                >
                  <p className="font-normal text-purple-700 dark:text-purple-400">
                    +
                  </p>
                </a>
                <a
                  href="#"
                  className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-2 shadow-md hover:bg-purple-100 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-purple-700"
                >
                  <p className="font-normal text-purple-700 dark:text-purple-400">
                    +
                  </p>
                </a>
              </div>
              <div className="flex flex-col  ">
                <div className="flex  w-full ">
                  <label
                    className="block text-purple-700 text-sm font-bold mb-2"
                    forhtml="thumbnailImage"
                  >
                    thumbnail image
                  </label>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <a
                    href="#"
                    className="block p-6 max-w-xl bg-white rounded-lg border-dashed border-2 shadow-md hover:bg-purple-100 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-purple-700"
                  >
                    <p className="font-normal text-purple-700 dark:text-purple-400">
                      +
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-2 shadow-md hover:bg-purple-100 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-purple-700"
                  >
                    <p className="font-normal text-purple-700 dark:text-purple-400">
                      +
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-2 shadow-md hover:bg-purple-100 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-purple-700"
                  >
                    <p className="font-normal text-purple-700 dark:text-purple-400">
                      +
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-2  shadow-md hover:bg-purple-100 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-purple-700"
                  >
                    <p className="font-normal text-purple-700 dark:text-purple-400">
                      +
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex flex-col  ">
                <div className="flex  w-full ">
                  <label
                    className="block text-purple-700 text-sm font-bold mb-2"
                    forhtml=" carouselImage"
                  >
                    carousel image
                  </label>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <a
                    href="#"
                    className="block p-6  max-w-sm bg-white rounded-lg border-dashed border-2 shadow-md hover:bg-purple-100 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-purple-700"
                  >
                    <p className="font-normal text-purple-700 dark:text-purple-400">
                      +
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-2 shadow-md hover:bg-purple-100 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-purple-700"
                  >
                    <p className="font-normal text-purple-700 dark:text-purple-400">
                      +
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-2 shadow-md hover:bg-purple-100 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-purple-700"
                  >
                    <p className="font-normal text-purple-700 dark:text-purple-400">
                      +
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-2 shadow-md hover:bg-purple-100 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-purple-700"
                  >
                    <p className="font-normal text-purple-700 dark:text-purple-400">
                      +
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ====================================================================add image =============================================================================*/}
        <div className="flex flex-col ">
          <div className="flex flex-row  justify-between  ">
            <div className="flex ">
              <label
                className="block text-purple-500 text-sm font-bold mb-2 border border-purple-500  rounded w-6 p-1 "
                forhtml="1"
              >
                1
              </label>
            </div>
            <div>
              <button className="bg-transparent hover:bg-purple-400 text-purple-500 font-semibold hover:text-white py-2 px-4 mx-3 border border-purple-400 hover:border-transparent rounded-xl shadow-md ">
                ADD
              </button>
              <button className="bg-transparent hover:bg-purple-400 text-purple-500 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded-xl shadow-md ">
                DELETE
              </button>
            </div>
          </div>

          <div className="flex flex-col  flex-auto text-purple-700 text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg border border-purple-300">
            <input
              className="block p-2 my-1 w-full text-purple-900  rounded-lg border border-purple-300 sm:text-xs "
              id="username"
              type="text"
              placeholder="Input Title Project"
            />
            <input
              className="block p-2 my-1 w-full text-purple-900  rounded-lg border border-purple-300 sm:text-xs "
              id="username"
              type="text"
              placeholder="Input Category"
            />
            <input
              className="block p-2 my-1 w-full text-purple-900  rounded-lg border border-purple-300 sm:text-xs "
              id="username"
              type="text"
              placeholder="Input price"
            />
            <input
              className="block p-2 my-1 w-full text-purple-900  rounded-lg border border-purple-300 sm:text-xs "
              id="username"
              type="text"
              placeholder="Input work duration"
            />
            <input
              className="block p-2 mt-1 mb-3 w-full text-purple-900 text-center  rounded-lg border border-purple-300 sm:text-xs "
              id="username"
              type="text"
              placeholder="Input Revision"
            />
          </div>
        </div>
        {/* ====================================================================add TitleProject =============================================================================*/}

        <div className="flex flex-col  flex-auto text-purple-700 text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg ">
          <button className="bg-white hover:bg-purple-100 text-purple-800 font-semibold py-2 px-4 border border-purple-400 rounded shadow">
            +
          </button>
        </div>
      </div>
      {/* ====================================================================button TitleProject =============================================================================*/}
    </div>
  );
}

export default CreateProducts;
