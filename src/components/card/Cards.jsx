import React from 'react';

function Cards({ pic, type, bgpic, className }) {
  return (
    <div
      className={className || 'card w-[28rem] bg-base-100 shadow-xl image-full'}
    >
      <figure>
        <img src={bgpic} alt="Shoes" />
      </figure>

      <div className="card-body">
        <div className="card-actions justify-center ">
          <img src={pic} className="  w-68 h-68"></img>
        </div>
        <h2>{type}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
}

export default Cards;
