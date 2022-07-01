import React from 'react';

function Rating({ setReviewRating, rate, setRate, setNewRate }) {
  const handleOnChange = (newRate) => {
    if (setReviewRating) {
      return setReviewRating(newRate);
    }
    if (setRate) {
      return setRate(newRate);
    }
    if (setNewRate) {
      return setNewRate(newRate);
    }
  };

  let ratingVariances;
  if (setReviewRating || setRate || setNewRate) {
    return (ratingVariances = (
      <div className="rating flex gap-1 mx-1">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400 h-4 w-4"
          onClick={() => handleOnChange(1)}
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400  h-4 w-4"
          onClick={() => handleOnChange(2)}
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400  h-4 w-4"
          onClick={() => handleOnChange(3)}
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400  h-4 w-4"
          defaultChecked
          onClick={() => handleOnChange(4)}
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400  h-4 w-4"
          onClick={() => handleOnChange(5)}
        />
      </div>
    ));
  }
  if (rate) {
    return (ratingVariances = (
      <div className="flex">
        {[...Array(5).keys()].map((el, idx) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill={idx <= +rate - 1 ? '#FB923C' : '#F2BDA2'}
            key={idx}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    ));
  }

  return <div>{ratingVariances}</div>;
}

export default Rating;
