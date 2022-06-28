import React from 'react';

function PhotoCollage() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 w-full h-3/6">
      <div className="col-start-1 col-span-2 row-start-1 row-span-4 bg-slate-300"></div>
      <div className="col-start-3 col-span-2 row-span-2 bg-fuchsia-400"></div>
      <div className="col-start-3 row-start-3 bg-fuchsia-600"></div>
      <div className="col-start-4 row-start-3 bg-fuchsia-200"></div>
      <div className="col-start-3 row-start-4 bg-fuchsia-300"></div>
      <div className="col-start-4 row-start-4 bg-fuchsia-100"></div>
    </div>
  );
}

export default PhotoCollage;
