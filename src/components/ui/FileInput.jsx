import React from 'react';

function FileInput({ setImageArr }) {
  return (
    <label className="block p-6 max-w-sm bg-white rounded-lg border-dashed border-[#06033A] border-2 shadow-md hover:bg-[#E8E7FF]">
      <p className="font-normal text-[#706D9E] dark:text-[#9747FF]">+</p>
      <input
        type="file"
        className="hidden"
        onChange={(e) => {
          if (e.target.files[0]) {
            setImageArr((prev) => [...prev, e.target.files[0]]);
          }
        }}
      />
    </label>
  );
}

export default FileInput;
