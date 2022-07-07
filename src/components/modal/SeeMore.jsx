import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import CarouselProduct from '../carousel/CarouselProduct';

export default function SeeMore({ photo }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="relative text-chat z-10 w-[100%] h-[100%] "
      >
        <div className=" absolute  bg-black font-bold w-full h-full rounded-lg opacity-50 "></div>
        <div className=" absolute left-0 right-0 z-10 top-[40%] font-bold text-white ">
          SEE MORE ({photo.length})
        </div>
        <div className="grid grid-cols-3 h-[100%] w-[100%] object-cover overflow-hidden rounded-lg  opacity-50  my-auto ">
          {photo.map((el, idx) => {
            return (
              <div key={idx}>
                <img
                  src={el.image}
                  className=" w-full h-full object-cover overflow-hidden "
                ></img>
              </div>
            );
          })}
        </div>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full flex flex-col gap-4 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    onClick={closeModal}
                    as="h3"
                    className="text-lg font-medium leading-6 text-text-placeholder "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Dialog.Title>
                  {photo.map((el, idx) => {
                    return (
                      <div key={idx}>
                        <img
                          src={el.image}
                          className=" w-full h-full rounded-xl  object-cover overflow-hidden "
                        ></img>
                      </div>
                    );
                  })}
                  {/* <div className="mt-2">{photo}</div> */}

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
