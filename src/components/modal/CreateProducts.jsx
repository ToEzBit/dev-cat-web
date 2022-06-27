import React from 'react';
import AddPackage from './AddPackage';

function CreateProducts() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-end px-5 py-3">
        <button className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 mx-3 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md ">
          Close
        </button>
        <button className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md ">
          Submit
        </button>
      </div>
      <div className="flex flex-col   text-[#06033A] text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg border border-[#7879F1]">
        <div className="flex  w-full  ">
          <div className="flex flex-col  flex-auto  text-center  px-4 py-2 m-2 gap-3 my-2  w-1/2">
            <div className="">
              <div className="flex justify-start">
                <label
                  className="block text-[#06033A] text-sm font-bold mb-2"
                  forhtml="titleProject"
                >
                  Title Project
                </label>
              </div>

              <input
                className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#9747FF] sm:text-xs "
                id="TitleProject"
                type="text"
                placeholder="Input Title Project"
              />
              <input
                className="block p-2 w-full text-[#706D9E]   rounded-lg border border-[#9747FF] sm:text-xs "
                id="Category"
                type="text"
                placeholder="Input Category"
              />
              <div className="flex flex-col pt-5">
                <div className="flex justify-start">
                  <label
                    className="block text-[#06033A]   text-sm font-bold mb-2 text-sm"
                    forhtml="Information"
                  >
                    Information
                  </label>
                </div>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-md text-[#706D9E]    rounded-xl border border-[#9747FF] py-8 "
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
                  className="block text-[#706D9E] text-sm font-bold mb-2"
                  forhtml="standardImage"
                >
                  standard image
                </label>
              </div>
              <div className="grid grid-cols-4 gap-4  ">
                <a
                  href="#"
                  className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF]"
                >
                  <p className="font-normal text-[#706D9E] dark:text-[#9747FF]">
                    +
                  </p>
                </a>
                <a
                  href="#"
                  className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF] "
                >
                  <p className="font-normal text-[#706D9E] dark:text-[#9747FF]">
                    +
                  </p>
                </a>
                <a
                  href="#"
                  className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF]"
                >
                  <p className="font-normal text-[#706D9E] dark:text-[#9747FF]">
                    +
                  </p>
                </a>
                <a
                  href="#"
                  className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF]"
                >
                  <p className="font-normal text-[#706D9E] dark:text-[#9747FF]">
                    +
                  </p>
                </a>
              </div>
              <div className="flex flex-col  ">
                <div className="flex  w-full ">
                  <label
                    className="block text-[#706D9E] text-sm font-bold mb-2"
                    forhtml="thumbnailImage"
                  >
                    thumbnail image
                  </label>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF]"
                  >
                    <p className="font-normal text-[#706D9E] dark:text-[#9747FF]">
                      +
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF]"
                  >
                    <p className="font-normal text-[#706D9E] dark:text-[#9747FF]">
                      +
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF]"
                  >
                    <p className="font-normal text-[#706D9E] dark:text-[#9747FF]">
                      +
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF]"
                  >
                    <p className="font-normal text-[#706D9E] dark:text-[#9747FF]">
                      +
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex flex-col  ">
                <div className="flex  w-full ">
                  <label
                    className="block text-[#706D9E] text-sm font-bold mb-2"
                    forhtml=" carouselImage"
                  >
                    carousel image
                  </label>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF]"
                  >
                    <p className="font-normal text-[#706D9E] dark:text-[#9747FF]">
                      +
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF]"
                  >
                    <p className="font-normal text-[#706D9E] dark:text-[#9747FF]">
                      +
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF]"
                  >
                    <p className="font-normal text-[#706D9E] dark:text-[#9747FF]">
                      +
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF]"
                  >
                    <p className="font-normal text-[#706D9E] dark:text-[#9747FF]">
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
                className="block text-[#5D5FEF] text-sm font-bold mb-2 border border-[#9747FF]  rounded-lg w-6 p-2 "
                forhtml="1"
              >
                1
              </label>
            </div>
            <div>
              {/* <button className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 mx-3 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md ">
                ADD Package
              </button> */}
              <button>
                <label
                  htmlFor="my-modal2"
                  className=" bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 mx-3 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md  modal-button text-center "
                >
                  ADD Package
                </label>
              </button>
              <input type="checkbox" id="my-modal2" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <AddPackage />
                </div>
              </div>
              <button className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 mx-3 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md ">
                ADD
              </button>
              <button className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md ">
                DELETE
              </button>
            </div>
          </div>

          {/* <div className="flex flex-col  flex-auto text-[#5D5FEF] text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg border border-[#9747FF]">
            <input
              className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs "
              id="username"
              type="text"
              placeholder="Input Title Project"
            />
            <input
              className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs "
              id="username"
              type="text"
              placeholder="Input Category"
            />
            <input
              className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs "
              id="username"
              type="text"
              placeholder="Input price"
            />
            <input
              className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs "
              id="username"
              type="text"
              placeholder="Input work duration"
            />
            <input
              className="block p-2 mt-1 mb-3 w-full text-[#706D9E] text-center  rounded-lg border border-[#E8E7FF] sm:text-xs "
              id="username"
              type="text"
              placeholder="Input Revision"
            />
          </div> */}
        </div>
        {/* ====================================================================add TitleProject =============================================================================*/}

        <div className="flex flex-col  flex-auto text-[#5D5FEF] text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg ">
          <button className="bg-white hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold py-2 px-4 border border-[#E8E7FF] rounded shadow">
            +
          </button>
        </div>
      </div>
      {/* ====================================================================button TitleProject =============================================================================*/}
    </div>
  );
}

export default CreateProducts;
