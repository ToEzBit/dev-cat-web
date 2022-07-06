import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../../asset/image/ProfilePic.png';

function WorkCard({ workcard, devId }) {
  const numberWithCommas = (x) => {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  let minPriceOfPackage;
  if (workcard?.Packages) {
    const packageArr = workcard?.Packages;
    const findMinPriceOfPackage = packageArr.reduce((prev, curr) =>
      +prev.price < +curr.price ? prev : curr,
    );
    minPriceOfPackage = numberWithCommas(findMinPriceOfPackage.price);
  } else {
    minPriceOfPackage = numberWithCommas(workcard?.minPrice);
  }
  return (
    <div className="hover:-translate-y-1 hover:scale-110 duration-300 group">
      <div className="card w-18 bg-base-100 shadow-xl max-w-xs ">
        <div className="flex justify-between px-4 py-4 pb-4 items-center">
          <div className="flex gap-2">
            <Link to={`/dev/profile/${workcard?.Dev.id}`}>
              <img
                className="w-12 rounded-full h-12 object-cover"
                src={workcard?.Dev.profileImage}
                alt=""
              />
            </Link>
            <h2 className="card-title">{workcard?.Dev.username}</h2>
          </div>
          <div className="badge border-none bg-amber-300 text-gray-600">
            {workcard?.avgReview}.0
          </div>
        </div>
        <Link to={`/product/${workcard?.id}`}>
          <figure className="h-52 w-full">
            {workcard?.ProductImages ? (
              <>
                <img
                  className="block object-cover w-full h-full  rounded-lg shadow-lg "
                  src={workcard.ProductImages[0]?.image}
                />
              </>
            ) : (
              <>
                <img
                  src="https://api.lorem.space/image/shoes?w=500&h=400"
                  alt="cats"
                />
              </>
            )}
          </figure>
        </Link>
        <div className="p-4 pt-8 -mt-4">
          <p className="">{workcard?.title}</p>
          <div className=" flex justify-between items-center pt-4">
            <div className="badge badge-outline">{workcard?.category}</div>
            <div className="badge badge-accent text-white">
              <p>{minPriceOfPackage} B</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
