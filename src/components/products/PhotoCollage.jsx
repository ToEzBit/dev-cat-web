import React from 'react';
import Carousel from '../carousel/Carousel';

import CarouselProduct from '../carousel/CarouselProduct';
import SeeMore from '../modal/SeeMore';

function PhotoCollage({ photo }) {
  // console.log(photo);
  return (
    <div className="grid grid-cols-5 grid-rows-4 w-full h-[400px] gap-2">
      {photo?.length >= 4 ? (
        <>
          <div className="col-start-1 col-span-3 rounded-none row-start-1 row-span-4 ">
            {/* <Carousel photo={photo} /> */}
            <CarouselProduct photo={photo} />
          </div>
          <div className="col-start-4 col-span-2 row-span-2 h-[200px] w-full  rounded-lg">
            <img
              src={photo[0]?.image}
              alt={''}
              className="object-cover object-center w-full h-full rounded-lg"
            />
          </div>
          <div className="col-start-4 row-start-3 ">
            <img
              src={photo[1]?.image}
              alt={''}
              className="object-cover object-center w-full h-full rounded-lg"
            />
          </div>
          <div className="col-start-5 row-start-3  rounded-lg">
            <img
              src={photo[2]?.image}
              alt={''}
              className="object-cover object-bottom w-full h-full rounded-lg"
            />
          </div>
          <div className="col-start-4 row-start-4 ">
            <img
              src={photo[3]?.image}
              alt={''}
              className="object-cover object-bottom w-full h-full rounded-lg"
            />
          </div>
          <button
            className="col-start-5 row-start-4 flex justify-center items-center relative hover:opacity-70 duration-300"
            // onClick={<Seemore />}
          >
            <SeeMore photo={photo} />
            {/* <div className=" absolute text-chat z-10">SEE MORE</div>
            <div className="grid grid-cols-3 h-[100%] w-[100%] object-cover overflow-hidden rounded-lg  opacity-50  my-auto ">
              {photo.map((el) => {
                return (
                  <img
                    src={el.image}
                    className=" w-full h-full object-cover overflow-hidden "
                  ></img>
                );
              })}
            </div> */}
          </button>
        </>
      ) : (
        <>
          <div className="col-start-1 col-span-3 row-start-1 row-span-4 bg-slate-300">
            {' '}
            <CarouselProduct photo={photo} />
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
