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
