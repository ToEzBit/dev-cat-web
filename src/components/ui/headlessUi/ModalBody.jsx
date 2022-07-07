import React from 'react';
import { Dialog } from '@headlessui/react';

function ModalBody({
  key,
  title,
  info,
  price,
  duration,
  revision,
  packageArr,
  setPackageArr,
  deletePackageArr,
}) {
  return (
    <div className="flex flex-col gap-3 border p-4 rounded-xl border-chat border-opacity-20">
      <>
        <div className="flex justify-between items-center">
          <Dialog.Title
            as="h3"
            className="text-lg font-bold leading-6 text-chat"
          >
            {title}
          </Dialog.Title>
          <p
            className="text-red-500"
            role="button"
            onClick={() => deletePackageArr(key, packageArr, setPackageArr)}
          >
            Delete
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-500">{info}</p>
          <div className="flex items-baseline gap-2">
            <div>Price : </div>
            <p className=" font-semibold text-chat">{price}</p>
          </div>
          <div className="flex items-baseline gap-2">
            <div>Duration : </div>
            <p className=" font-semibold text-chat">{duration}</p>
          </div>
          <div className="flex items-baseline gap-2">
            <div>Revision : </div>
            <p className=" font-semibold text-chat">{revision}</p>
          </div>
        </div>
      </>
    </div>
  );
}

export default ModalBody;
