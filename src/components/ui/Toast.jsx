import React from 'react';

function Toast({ message, status }) {
  return (
    <div className="flex items-center justify-between max-w-xs p-4 bg-white border rounded-md shadow-sm animate-bounce">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-8 h-8 ${status ? 'text-green-600' : 'text-red-600'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <p
          className={`ml-3 text-sm font-bold ${
            status ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      </div>
      <span className="inline-flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
  );
}

export default Toast;
