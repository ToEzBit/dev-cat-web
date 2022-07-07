import React from 'react';

function Package({
  price,
  duration,
  revision,
  title,
  info,
  key,
  packageArr,
  setPackageArr,
  deletePackageArr,
}) {
  return (
    <div className="flex ">
      <div className="flex justify-start w-full">
        <div
        // tabIndex="0"
        // className="collapse collapse-arrow border border-[#9747FF] bg-base-100 rounded-box my-8"
        >
          <div className="collapse-title text-xl font-medium">{title}</div>
          <div className="collapse-content flex justify-start flex-col">
            <p>{info}</p>
            <p>{`Price : ${price}`}</p>
            <p>{`Duration : ${duration}`}</p>
            <p>{`Revision : ${revision}`}</p>
          </div>
        </div>
      </div>
      <button
        className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md h-12 self-center mx-4"
        onClick={() => deletePackageArr(key, packageArr, setPackageArr)}
      >
        DELETE
      </button>
    </div>
  );
}

export default Package;
