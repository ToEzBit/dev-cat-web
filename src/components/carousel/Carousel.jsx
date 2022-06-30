import React from 'react';

function Carousel({ photo }) {
  return (
    <div className="carousel w-full h-full ">
      {photo?.map((el, idx) => {
        return (
          <div id={`slide-${idx}`} className="carousel-item relative w-full">
            <img src={el.image} className="w-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide-${idx - 1}`}
                className="btn btn-circle btn-md glass"
              >
                ❮
              </a>
              <a
                href={`#slide-${idx + 1}`}
                className="btn btn-circle btn-md grid-col glass"
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
