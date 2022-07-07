import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ModalBody from './ModalBody';

export default function MyModal({
  packageArr,
  setPackageArr,
  deletePackageArr,
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" flex items-center justify-center border p-4 rounded-xl">
        <button
          type="button"
          onClick={openModal}
          className="bg-chat w-full p-2 rounded-lg text-white"
        >
          View Package
        </button>
      </div>

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 flex flex-col gap-4 text-left align-middle shadow-xl transition-all">
                  {packageArr.map((el, idx) => {
                    return (
                      <ModalBody
                        key={idx}
                        title={el.title}
                        info={el.info}
                        price={el.price}
                        duration={el.duration}
                        revision={el.revision}
                        deletePackageArr={deletePackageArr}
                        packageArr={packageArr}
                        setPackageArr={setPackageArr}
                      />
                    );
                  })}
                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn btn-primary w-full bg-chat border-none hover:bg-chat-quotation duration-500"
                      onClick={closeModal}
                    >
                      Close Modal
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
