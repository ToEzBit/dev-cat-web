import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

function FilterResultPageContent({
  title,
  LowerBoundPrice,
  upperBoundPrice,
  setLowerBoundPrice,
  setUpperBoundPrice,
  setRating,
  setDuration,
  setOrder,
}) {
  const handleSlider = (e) => {
    setLowerBoundPrice(e[0]);
    setUpperBoundPrice(e[1]);
  };

  const datePicker = (e) => {
    setDuration(e.target.value);
  };

  const priceContent = (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 w-4/5 mx-auto my-2">
        <h4>
          {LowerBoundPrice} - {upperBoundPrice}
        </h4>
        <div className="w-full">
          <Slider
            range
            allowCross={false}
            min={0}
            max={10000}
            value={[LowerBoundPrice, upperBoundPrice]}
            defaultValue={[LowerBoundPrice, upperBoundPrice]}
            onChange={(ev) => handleSlider(ev)} //[LowerBoundPrice, upperBoundPrice]
          />
        </div>
        <div>
          <label className="minPrice">
            <span className="label-text">From</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full h-6"
            onChange={(e) => setLowerBoundPrice(e.target.value)}
          />
        </div>
        <div>
          <label className="maxPrice">
            <span className="label-text">To</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full h-6"
            onChange={(e) => setUpperBoundPrice(e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const ratingContent = (
    <div className="flex flex-col items-center justify-center gap-2 w-4/5 mx-auto my-2">
      <button className="btn btn-ghost w-full" onClick={() => setRating(5)}>
        5
      </button>
      <button className="btn btn-ghost w-full" onClick={() => setRating(4)}>
        more than 4
      </button>
      <button className="btn btn-ghost w-full" onClick={() => setRating(3)}>
        more than 3
      </button>
      <button className="btn btn-ghost w-full" onClick={() => setRating(2)}>
        more than 2
      </button>
      <button className="btn btn-ghost w-full" onClick={() => setRating(1)}>
        more than 1
      </button>
    </div>
  );

  const durationContent = (
    <div className="flex flex-col items-center justify-center gap-2 w-4/5 mx-auto my-2">
      <div>
        <input type="date" onChange={(e) => datePicker(e)} />
      </div>
      <button
        className="btn btn-ghost w-full"
        onClick={() => setDuration(null)}
      >
        flexible
      </button>
    </div>
  );

  const orderContent = (
    <div className="flex flex-col items-center justify-center gap-2 w-4/5 mx-auto my-2">
      <div className="w-full">
        {/* <button
          className="btn btn-ghost w-full"
          onClick={() => setOrder('test')}
        >
          relevance
        </button> */}
        <button className="btn btn-ghost w-full" onClick={() => setOrder(true)}>
          A - Z
        </button>
        <button
          className="btn btn-ghost w-full"
          onClick={() => setOrder(false)}
        >
          Z - A
        </button>
        {/* <button
          className="btn btn-ghost w-full"
          onClick={() => setOrder('test')}
        >
          Rating, highest first
        </button>
        <button
          className="btn btn-ghost w-full"
          onClick={() => setOrder('test')}
        >
          Rating, lowest first
        </button>
        <button
          className="btn btn-ghost w-full"
          onClick={() => setOrder('test')}
        >
          Starting price, highest first
        </button>
        <button
          className="btn btn-ghost w-full"
          onClick={() => setOrder('test')}
        >
          Starting price, lowest first
        </button> */}
      </div>
    </div>
  );

  
  let content;
  switch (title) {
    case 'Price':
      content = priceContent;
      break;
    case 'Rating':
      content = ratingContent;
      break;
    case 'Duration':
      content = durationContent;
      break;
    case 'Order by':
      content = orderContent;
      break;
    default:
      return;
  }

  return <div>{content}</div>;
}

export default FilterResultPageContent;
