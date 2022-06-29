import React from 'react';
import Carousel from '../carousel/Carousel';
import CarouselSecondary from '../carousel/CarouselSecondary';

function PhotoCollage({ photo }) {
  return (
    <div className="grid grid-cols-5 grid-rows-4 w-full h-[400px]">
      {photo?.length >= 4 ? (
        <>
          <div className="col-start-1 col-span-3 row-start-1 row-span-4 bg-slate-300">
            <Carousel photo={photo} />
          </div>
          <div className="col-start-4 col-span-2 row-span-2 h-[200px] w-full bg-fuchsia-100">
            <img
              src={photo[0]?.image}
              alt={''}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="col-start-4 row-start-3 bg-fuchsia-600 ">
            <img
              src={photo[1]?.image}
              alt={''}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="col-start-5 row-start-3 bg-fuchsia-200">
            <img
              src={photo[2]?.image}
              alt={''}
              className="object-cover object-bottom w-full h-full"
            />
          </div>
          <div className="col-start-4 row-start-4 bg-fuchsia-300">
            <img
              src={photo[3]?.image}
              alt={''}
              className="object-cover object-bottom w-full h-full"
            />
          </div>
          <button className="col-start-5 row-start-4 bg-fuchsia-100 flex justify-center items-center">
            See more..
          </button>
        </>
      ) : (
        <>
          <div className="col-start-1 col-span-3 row-start-1 row-span-4 bg-slate-300">
            {' '}
            <Carousel photo={photo} />
          </div>
          <div className="col-start-4 col-span-2 row-span-2 bg-fuchsia-400">
            <img
              src={photo[0]?.image}
              alt={''}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <button className="col-start-4 col-span-2 row-span-2 bg-fuchsia-600 flex justify-center items-center">
            See more..
          </button>
        </>
      )}
    </div>
  );
}

export default PhotoCollage;
