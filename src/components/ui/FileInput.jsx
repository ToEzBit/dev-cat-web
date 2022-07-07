import React from 'react';

function FileInput({ setImageArr }) {
  return (
    <label className=" cursor-pointer block p-6 max-w-sm bg-white rounded-lg border-dashed hover:border-chat  border-2 hover:bg-violet-100 duration-300 hover:opacity-80">
      <p className="font-normal  text-chat-quotation flex justify-center dark:text-chat">
        +
      </p>
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
