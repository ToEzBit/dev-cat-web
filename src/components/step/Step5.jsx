import React from 'react';
import { Input } from '@material-tailwind/react';

import { useNavigate } from 'react-router-dom';

function Step5() {
  const navigate = useNavigate();
  const handleToHome = () => {
    navigate('/');
  };
  return (
    <>
      <div className="card max-w-screen-xl flex flex-col bg-base-100 shadow-xl border mx-auto p-20 ">
        {/*====================== Title Project ====================== */}
        <div className="flex flex-row gap-2 ">
          <div className="gap-5">
            <label
              className="block text-chat text-5xl font-extrabold"
              htmlFor="titleProject"
            >
              STEP 5
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-green-400 font-bold card-title text-4xl">
              SUCCESSFULLY
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleToHome}>
              HOME
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step5;
