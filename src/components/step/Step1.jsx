import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import step1 from '../../asset/video/step1.mp4';
import { motion } from 'framer-motion';

const people = [{ name: 'Web Application' }, { name: 'Mobile Application' }];

function Step1() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(people[0]);

  const handleContinue2 = () => {
    navigate('/create-product/2');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="card  max-w-screen-xl h-full p-20 border flex flex-col bg-base-100 shadow-xl mx-auto mt-20"
      >
        {/*====================== Title Project ====================== */}
        <div className=" grid grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className=" flex w-[100%] flex-col gap-4">
              <label
                className="block text-chat text-5xl font-extrabold"
                htmlFor="titleProject"
              >
                STEP 1
              </label>
              <div className="flex flex-col gap-2">
                <label
                  className="block text-text-normal text-base font-bold"
                  htmlFor="titleProject"
                >
                  Choose Category
                </label>
                <div className="text-sm text-text-normal opacity-60">
                  Choose a primary category that describes your business as a
                  whole, and be specific. When you start to enter your category,
                  choose a category from a dropdown that shows up.
                </div>
              </div>
            </div>
            <div className="w-48">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selected.name}</span>
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
                      {people.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-chat text-white rounded-lg'
                                : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-chat ">
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
            </div>

            <div className="flex flex-col gap-2">
              <div className="card-actions">
                <button
                  className="btn btn-primary bg-chat border-none hover:bg-chat-quotation duration-500"
                  onClick={handleContinue2}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>

          <div className=" rounded-xl w-[100%] h-80">
            <video
              autoPlay
              loop
              muted
              className=" object-cover h-80 rounded-xl w-full"
              src={step1}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Step1;
