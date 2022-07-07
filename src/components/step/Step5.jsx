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
      <div className="card w-3/4 h-96 flex flex-col bg-base-100 shadow-xl mx-auto mt-20">
        {/*====================== Title Project ====================== */}
        <div className="flex flex-row gap-2 ml-12 mt-6">
          <div className="gap-5">
            <label
              className="block text-purple-500 text-4xl font-extrabold mb-2"
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
