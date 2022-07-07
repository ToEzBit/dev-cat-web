import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const people = [{ name: 'Web Application' }, { name: 'Mobile Application' }];

function Step1() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(people[0]);

  const handleContinue2 = () => {
    navigate('/create-product/2');
  };

  return (
    <>
      <div className="card w-3/4 h-96 flex flex-col bg-base-100 shadow-xl mx-auto mt-20">
        {/*====================== Title Project ====================== */}
        <div className="flex flex-col gap-2 ml-12 mt-6">
          <div className="gap-5">
            <label
              className="block text-purple-500 text-4xl font-extrabold mb-2"
              htmlFor="titleProject"
            >
              STEP 1
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className="block text-[#06033A] text-sm font-bold mb-2"
              htmlFor="titleProject"
            >
              Choose Category
            </label>
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
                              ? 'bg-amber-100 text-amber-900'
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
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
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
              <button className="btn btn-primary" onClick={handleContinue2}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step1;
