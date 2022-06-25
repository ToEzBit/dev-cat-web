import React from 'react';

export default function CarouselSecondary() {
  return (
    <div className="carousel w-full flex items-end">
      <div id="item1" className="carousel-item w-full relative">
        <img
          src="https://api.lorem.space/image/car?w=800&h=400&hash=8B7BCDC2"
          className="w-full"
        />
      </div>
      <div id="item2" className="carousel-item w-full relative">
        <img
          src="https://api.lorem.space/image/car?w=800&h=400&hash=500B67FB"
          className="w-full"
        />
      </div>
      <div id="item3" className="carousel-item w-full relative">
        <img
          src="https://api.lorem.space/image/car?w=800&h=400&hash=A89D0DE6"
          className="w-full"
        />
      </div>
      <div id="item4" className="carousel-item w-full relative">
        <img
          src="https://api.lorem.space/image/car?w=800&h=400&hash=225E6693"
          class="w-full"
        />
      </div>
      <div className="flex justify-center py-2 gap-2 absolute mx-auto w-4/5">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}
