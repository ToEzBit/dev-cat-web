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
    <div className="flex">
      <>
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900"
        >
          {title}
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">{info}</p>
          <p>{`Price : ${price}`}</p>
          <p>{`Duration : ${duration}`}</p>
          <p>{`Revision : ${revision}`}</p>
        </div>
      </>
      <p
        className="text-red-500"
        role="button"
        onClick={() => deletePackageArr(key, packageArr, setPackageArr)}
      >
        x
      </p>
    </div>
  );
}

export default ModalBody;
