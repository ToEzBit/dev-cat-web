import React from 'react';

function ImageDisplay({ key, img, imageArr, setImageArr, deleteImgArr }) {
  return (
    <a className="block  max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF]">
      <div className="flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute text-white ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          role="button"
          onClick={() => deleteImgArr(key, imageArr, setImageArr)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <img className="" src={img ? URL.createObjectURL(img) : ''} />
    </a>
  );
}

export default ImageDisplay;
