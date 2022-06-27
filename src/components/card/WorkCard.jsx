import React from 'react';
import ProfilePic from '../../asset/image/ProfilePic.png';

function WorkCard() {
  return (
    <div>
      <div className="hover:-translate-y-1 hover:scale-110 duration-300 group">
        <div className="card w-18 bg-base-100 shadow-xl ">
          <div className="flex justify-between px-4 py-4 pb-4 items-center">
            <div className="flex gap-2">
              <img className="w-8 " src={ProfilePic} alt="" />
              <h2 className="card-title">Guest</h2>
            </div>
            <div className="badge border-none bg-amber-300 text-gray-600">
              4.9
            </div>
          </div>
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=500&h=400"
              alt="cats"
            />
          </figure>
          <div className="p-4 pt-8 -mt-4">
            <p className="">If a dog chews shoes whose shoes does he choose?</p>
            <div className=" flex justify-between items-center pt-4">
              <div className="badge badge-outline">Mobile</div>
              <div className="badge badge-accent text-white">3,000B</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
