import { useState } from 'react';
import ProfilePic from '../../asset/image/ProfilePic.png';
import AnonymousProfilePic from '../../asset/image/AnonymousProfilePic.png';

import { useFilter } from '../context/FilterContext';
import Rating from './Rating';

export default function CreateReview({ name, setName }) {
  const [rate, setRate] = useState(0);
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { setReviewRating } = useFilter();
  return (
    <div className="w-full shadow-sm rounded-lg bg-white">
      <div className="w-full h-30 m-2 flex">
        <div className="flex justify-between">
          <div className="w-10 flex justify-start gap-3 items-center ">
            <img src={isAnonymous ? AnonymousProfilePic : ProfilePic} />
            <div>{isAnonymous ? '****' : name}</div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center mx-4">
          <Rating setReviewRating={setReviewRating} />
        </div>
      </div>
      <textarea
        id="productReview"
        name="productReview"
        className="w-full  border border-indigo-50"
        onChange={(e)=>setMessage(e.target.value)}
      ></textarea>
      <div className="w-full flex justify-end">
        <button class="btn btn-outline btn-info btn-sm mx-2 mb-1">
          Submit
        </button>
      </div>
    </div>
  );
}
