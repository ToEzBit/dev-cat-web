import React from 'react';

function Carousel({ photo }) {
  return (
    <div className="carousel w-full h-full ">
      {photo?.map((el, idx) => (
        <div id={`slide${idx}`} className="carousel-item relative w-full">
          <img src={el.image} key={idx} className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${idx - 1}`} className="btn btn-circle glass">
              ❮
            </a>
            <a
              href={`#slide${idx + 1}`}
              className="btn btn-circle glass grid-col"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
