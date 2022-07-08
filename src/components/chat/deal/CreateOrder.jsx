import React, { useEffect, Fragment, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { getAllDevProducts, getProductById } from '../../../api/product';
import { createOrder } from '../../../api/order';
import { useOrder } from '../../../contexts/OrderContext';
import axios from '../../../config/axios';
import ListBox from '../../ui/headlessUi/ListBox';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

export default function CreateOrder({
  currentChat,
  socket,
  setMessages,
  setNewMessages,
  messages,
  setFetchOrder,
}) {
  const { setOrderId, orderId } = useOrder();
  const [selected, setSelected] = useState(people[0]);
  const ctx = useAuth();

  const [devProducts, setDevProducts] = useState(null);
  const [devPackages, setDevPackages] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [newMessageOrder, setNewMessageOrder] = useState(null);

  useEffect(() => {
    const getDevProducts = async () => {
      const res = await getAllDevProducts(ctx?.dev?.id);
      setDevProducts(res);
    };
    getDevProducts();
  }, [ctx.dev?.id]);

  // console.log(devProducts);
  // console.log('xxxxxxxxxx');
  // console.log(devPackages);
  const handleSelectProduct = (el) => {
    setSelectedProduct(el);
  };

  useEffect(() => {
    if (!selectedProduct) {
      return;
    }
    const getPackage = async () => {
      const productId = +selectedProduct?.id;
      const res = await getProductById(productId);
      setDevPackages(res);
    };
    getPackage();
  }, [selectedProduct]);

  //   console.log(ctx?.clientChat);

  const handleCreateOrder = async () => {
    const receiverId =
      currentChat?.senderId === ctx?.clientChat?.id
        ? currentChat?.receiverId
        : currentChat?.senderId;

    const res = await createOrder({
      productId: selectedProduct.id,
      packageId: selectedPackage.id,
      userId: receiverId,
    });

    setOrderId(res?.data?.createdOrder?.id);
    const createdOrderId = res?.data?.createdOrder?.id;

    const message = {
      sender: ctx.clientChat.id,
      message: `order: ${res?.data?.createdOrder?.id}`,
      conversationId: currentChat.id,
    };

    socket.current.emit('sendMessage', {
      senderId: ctx?.clientChat?.id,
      receiverId,
      message: `order:${res?.data?.createdOrder?.id}`,
    });

    try {
      const res = await axios.post('/messages', message);
      setMessages([...messages, res.data]);
      setFetchOrder((prev) => !prev);
      setSelectedProduct(null);
      setSelectedPackage(null);
      setNewMessages('');
      setOrderId('');
    } catch (err) {
      console.log(err);
    }
  };

  // socket.current.emit('sendMessage', {
  //   senderId: ctx?.clientChat?.id,
  //   // receiverId,
  //   message: newMessages,
  // });

  // const test = 'order: ' + { orderId };

  return (
    <>
      <div className="w-full h-full p-4 flex justify-center items-center">
        <label
          htmlFor="createOrder-modal"
          class="absolute right-0 top-0 m-8  text-chat"
          role="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        </label>
        <div className="gap-5 items-center flex flex-col ">
          <h3>Create Order</h3>
          {/* ================ D1 ================== */}
          <Listbox value={selectedProduct} onChange={setSelectedProduct}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-96 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate text-chat">
                  {' '}
                  Select Package: {selectedProduct ? selectedProduct.title : ''}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {devProducts?.map((el, idx) => (
                    <Listbox.Option
                      key={idx}
                      className={({ active }) =>
                        `relative cursor-default rounded-xl select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-chat text-white' : 'text-chat'
                        }`
                      }
                      value={el}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {el.title}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-text-normal">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          {/* ================ D1 ==================== */}
          {/* ================ D2 ==================== */}
          <Listbox value={selectedPackage} onChange={setSelectedPackage}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-96 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate text-chat">
                  {' '}
                  Select Package: {selectedPackage ? selectedPackage.title : ''}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {devPackages &&
                    devPackages?.Packages.map((el, idx) => (
                      <Listbox.Option
                        key={idx}
                        className={({ active }) =>
                          `relative cursor-default select-none rounded-xl py-2 pl-10 pr-4 ${
                            active ? 'bg-chat text-white' : 'text-chat'
                          }`
                        }
                        value={el}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {el.title}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-text-normal">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          {/* ================ D2 ==================== */}

          {selectedPackage && (
            <div className="flex flex-col p-6">
              <h5 className=" font-semibold text-chat">Description</h5>
              <ul>
                <li className="mb-2">
                  category:{' '}
                  {selectedProduct.category === 'web'
                    ? 'Website'
                    : 'Mobile Application'}{' '}
                </li>
                {Object.entries(selectedPackage).map((el, idx) => {
                  if (el[0] === 'PackageDetails') {
                    return;
                  }
                  return (
                    <li key={idx}>
                      {el[0]} :{el[1]}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <label
            className={`btn btn-primary w-full bg-chat border-none hover:bg-chat-quotation duration-500 ${
              !selectedPackage && 'btn-disabled'
            }`}
            htmlFor="createOrder-modal"
            onClick={() => handleCreateOrder()}
            role="button"
          >
            Submit
          </label>
        </div>
      </div>
      <div className="fixed top-16 w-72"></div>
    </>
  );
}
