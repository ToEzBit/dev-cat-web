import React from 'react';
import { useLocation } from 'react-router-dom';

function StepTab() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="max-w-screen-lg mx-auto mt-8">
      <ul className="stepper" data-mdb-stepper="stepper">
        <li className="stepper-step ">
          <div className="stepper-head hover:bg-white">
            {location.pathname === '/create-product/1' ? (
              <span
                className="stepper-head-icon"
                style={{ backgroundColor: '#7879F1' }}
              >
                1
              </span>
            ) : (
              <span className="stepper-head-icon">1</span>
            )}
            <span className="stepper-head-text"> step1 </span>
          </div>
        </li>
        <li className="stepper-step ">
          <div className="stepper-head hover:bg-white">
            {location.pathname === '/create-product/2' ? (
              <span
                className="stepper-head-icon"
                style={{ backgroundColor: '#7879F1' }}
              >
                2
              </span>
            ) : (
              <span className="stepper-head-icon">2</span>
            )}
            <span className="stepper-head-text"> step2 </span>
          </div>
        </li>
        <li className="stepper-step">
          <div className="stepper-head hover:bg-white">
            {location.pathname === '/create-product/3' ? (
              <span
                className="stepper-head-icon"
                style={{ backgroundColor: '#7879F1' }}
              >
                3
              </span>
            ) : (
              <span className="stepper-head-icon">3</span>
            )}
            <span className="stepper-head-text"> step3 </span>
          </div>
        </li>
        <li className="stepper-step">
          <div className="stepper-head hover:bg-white">
            {location.pathname === '/create-product/4' ? (
              <span
                className="stepper-head-icon"
                style={{ backgroundColor: '#7879F1' }}
              >
                4
              </span>
            ) : (
              <span className="stepper-head-icon">4</span>
            )}
            <span className="stepper-head-text"> step4 </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default StepTab;
