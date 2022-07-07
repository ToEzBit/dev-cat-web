import React from 'react';

function StepTab() {
  return (
    <>
      <ul className="stepper" data-mdb-stepper="stepper">
        <li className="stepper-step stepper-active">
          <div className="stepper-head">
            <span className="stepper-head-icon"> 1 </span>
            <span className="stepper-head-text"> step1 </span>
          </div>
        </li>
        <li className="stepper-step">
          <div className="stepper-head">
            <span className="stepper-head-icon"> 2 </span>
            <span className="stepper-head-text"> step2 </span>
          </div>
        </li>
        <li className="stepper-step">
          <div className="stepper-head">
            <span className="stepper-head-icon"> 3 </span>
            <span className="stepper-head-text"> step3 </span>
          </div>
        </li>
        <li className="stepper-step">
          <div className="stepper-head">
            <span className="stepper-head-icon"> 4 </span>
            <span className="stepper-head-text"> step4 </span>
          </div>
        </li>
        <li className="stepper-step">
          <div className="stepper-head">
            <span className="stepper-head-icon"> 5 </span>
            <span className="stepper-head-text"> step5 </span>
          </div>
        </li>
      </ul>
    </>
  );
}

export default StepTab;
