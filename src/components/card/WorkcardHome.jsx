import React from 'react';
import { Link } from 'react-router-dom';

const WorkcardHome = ({ test, el }) => {
  console.log('term', el, test);
  return (
    <div className="hover:-translate-y-1 hover:scale-110 duration-300 group">
      <div className="card w-18 bg-base-100 shadow-xl max-w-xs ">
        <div className="flex justify-between px-4 py-4 pb-4 items-center">
          <div className="flex gap-2">
            <Link to={`/dev/profile/${el?.Dev.id}`}>
              <img
                className="w-12 rounded-full h-12 object-cover"
                src={el?.Dev.profileImage}
                alt=""
              />
            </Link>
            <h2 className="card-title">{el?.Dev.username}</h2>
          </div>
          <div className="badge border-none bg-amber-300 text-gray-600">
            {el?.avgReview}.0
          </div>
        </div>
        <Link to={`/product/${el?.id}`}>
          <figure className="h-52 w-full">
            {el?.ProductImages ? (
              <>
                <img
                  className="block object-cover w-full h-full  rounded-lg shadow-lg "
                  src={el.ProductImages[0]?.image}
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
          {/* <p className="">{shortProductTitle}</p> */}
          <div className=" flex justify-between items-center pt-4">
            <div className="badge badge-outline">
              {el?.category === 'web' ? 'WebSite' : 'Mobile'}
            </div>
            <div className="badge badge-accent text-white">
              {/* <p>{minPriceOfPackage} B</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkcardHome;
