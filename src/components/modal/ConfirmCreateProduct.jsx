import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function ConfirmCreateProduct({ handleCreateProduct }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSubmit = () => {
    closeModal();
    handleCreateProduct();
  };
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className=" bg-chat  z-10 btn btn-primary  border-none hover:bg-chat-quotation duration-500 "
      >
        Confirm to Create
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
                    as="h3"
                    className="text-lg leading-6 text-chat font-semibold"
                  >
                    Please confirm
                  </Dialog.Title>
                  <div className="">
                    <p className="text-sm text-text-placeholder">
                      To add your product, please confirm that your product
                      details has been checked, it will add to your work
                      collection.
                    </p>
                  </div>

                  <div className=" flex justify-center gap-8">
                    <button
                      type="button"
                      className="border cursor-pointer border-stroke p-2 rounded-xl px-4 hover:bg-chat  hover:text-white duration-300  text-chat"
                      onClick={handleSubmit}
                    >
                      Yes! I'm sure
                    </button>
                    <button
                      type="button"
                      className="border border-stroke p-2 rounded-xl px-4  hover:bg-chat  hover:text-white duration-300  text-chat"
                      onClick={closeModal}
                    >
                      No I'm not
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
